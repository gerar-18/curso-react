import React from 'react';

export const TaskBanner = props =>(
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName}'s Task App ({props.taskItems.filter(t => !t.done).length} task for do)
    </h4>
)