import React, { ChangeEvent, useEffect, useState } from 'react';
import { TabPanel } from '@components/tabs';
import { meaning } from '@word-book';
import { useSnackbar } from 'react-simple-snackbar';
import { GenericInput, Password, Phone } from '@components/inputs';
import { Button } from '@components/button';
import { useAuthContext } from '@context';
import { database, auth } from '@services';
import { emailBuilder } from '@components/utils';
import { RegisterForm, Select } from './styles';

export const AddWatchers: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [station_id, setStationId] = useState<string>('');
    const [station_name, setStation_name] = useState<string>('');
    const [stations, setStations] = useState<
        {
            station_id: string;
            station_name: string;
            station_location: string;
        }[]
    >([]);
    const [openSnackbar] = useSnackbar();
    const { isLoading, startLoading, stopLoading } = useAuthContext();

    const onError = (err: string) => {
        stopLoading();
        openSnackbar(err);
    };

    const addWatchersSubmit = () => {
        try {
            const email = emailBuilder(phone);
            const data: {
                password: string;
                avatar: string;
                name: string;
                email: string;
                phone: string;
                station_id: string;
                station_name: string;
            } = {
                name,
                avatar: '',
                email,
                phone,
                password,
                station_id,
                station_name,
            };

            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    if (user) {
                        database()
                            .ref(`users/watchers/${user.uid}`)
                            .set(data)
                            .then(() => {
                                openSnackbar('Vigia cadastrado com sucesso');
                                stopLoading();
                            });
                    }
                })
                .catch((error) => {
                    onError('Aconteceu alguma coisa tente denovo');
                });
        } catch (err) {
            stopLoading();
        }
    };

    const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        startLoading();

        addWatchersSubmit();
    };

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = e.target.value;

        setStationId(stations[selectedIndex].station_id);
        setStation_name(stations[selectedIndex].station_name);
    };

    useEffect(() => {
        database()
            .ref('gas-stations/stations')
            .on('value', (snapshot) => {
                const stations = snapshot.val();
                const tempPumps = [];

                Object.keys(stations).map((pump) => {
                    tempPumps.push({
                        station_id: pump, //station id
                        station_name: stations[pump]?.name, //name:
                        station_location: stations[pump]['street-name'],
                    });
                });

                setStations([...tempPumps]);
            });
    }, []);

    return (
        <TabPanel label={meaning('pages.register.add-watchers')}>
            <RegisterForm onSubmit={onSubmit}>
                <h3>{meaning('pages.register.add-watchers')}</h3>
                <div id="anything">
                    Pereencha os dados do novo controlador de bombas
                </div>
                <GenericInput value={name} changeValue={setName} label="Nome" />
                <Phone value={phone} changeValue={setPhone} />
                <Password value={password} changeValue={setPassword} />
                <div id="select-label">Selecione a bomba</div>
                <Select
                    name="stations"
                    id="stations"
                    onChange={onSelect}
                    required
                >
                    {stations &&
                        stations.map((station, index) => (
                            <option
                                value={index}
                                key={station.station_id}
                                selected={index === 0}
                                id={
                                    (station.station_id === station_id &&
                                        'select-selected') ||
                                    ''
                                }
                            >
                                {`${station.station_name} ${
                                    (station.station_location &&
                                        station.station_location) ||
                                    ''
                                }`}
                            </option>
                        ))}
                </Select>
                <Button variant="success" isLoading={isLoading}>
                    {meaning('pages.register.add-watchers', {
                        capitalized: true,
                    })}
                </Button>
            </RegisterForm>
        </TabPanel>
    );
};
