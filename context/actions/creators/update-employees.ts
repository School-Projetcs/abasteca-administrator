import { Dispatch } from 'react';

import { UPDATE_EMPLOYEES } from '../../action-types';
import { Employees, ReducerActionProps } from '../../types';

export const updateEmployees =
    (dispatch: Dispatch<ReducerActionProps>) =>
    async ({ managers, watchers }: Employees) => {
        dispatch({ type: UPDATE_EMPLOYEES, employees: { managers, watchers } });
    };
