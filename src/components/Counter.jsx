import React, { useState } from 'react'

export default function Counter() {
    //   State
    //   كائن يحتوي على البيانات التي يمكن أن تتغير بمرور الوقت وتؤثر على كيفية عرض المكون. 
    // الحالة تسمح للمكونات بالحفاظ على البيانات بين عمليات إعادة العرض (renders) 
    // تحديث واجهة المستخدم عندما تتغير هذه البيانات

    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
  return (
    <div>
            <h1>Number: {count}</h1>
            <button onClick={incrementCount} style={{border:0,backgroundColor:"#000" , color:"#fff", padding:'5px 10px'}}>+</button>
    </div>
  )
}
