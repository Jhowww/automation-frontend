import FullCalendar, { render } from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import React, { PureComponent, createRef } from "react";
import { Component, useEffect, useState } from 'react/cjs/react.development';

function CustCalendar(props) {
    const [arr, setArr] = useState([{
        start: '2022-01-01',
        end: '2022-01-01',
        title: '測試範例'
    }]);

    useEffect(
        () => {
            for (let i = 0; i < props.strokslist.length; i++) {
                if (props.strokslist[i].start == undefined || props.strokslist[i].start == null) {
                    continue;
                }
                console.log(props.strokslist[i]);
                setArr(props.strokslist[i])
            }
            console.log(arr);            
        }, []
    )

    return (
        <div>
            <FullCalendar
                plugins={[timeGridPlugin, dayGridPlugin]}
                initialView='dayGridMonth'
                events={
                    // [
                    //     {                                                        
                    //         description: "維修進場Desc",
                    //         end: "2022-01-02",
                    //         start: "2022-01-02",                            
                    //         title: "進廠維修",
                    //     }
                    // ]
                    arr
                }
            />
        </div>
    )
}

export default CustCalendar;