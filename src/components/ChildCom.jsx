import React from 'react'

export default function ChildCom(props) {
    //  props 
    // (اختصار لـ "properties") هي وسيلة لتمرير البيانات من مكون أبوي إلى مكون فرعي
    // تمرير البيانات عبر props كسمات (attributes) للمكون وتصبح متاحة في المكون الفرعي ككائن
  return (
        <div>
            <h2>{props.text}</h2>
        </div> 
    )

}

function ParentComponent() {
    const message = "Ahmed khalid";

    return (
        <div>
            <ChildComponent text={message} />
        </div>
    );
}