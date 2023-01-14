
function Token({prefix,color}) {
  let number = Math.random() * 10;
  return (
    <div className={`TokenStyle ${number < 4 ?'tokenAni1':number <6? 'tokenAni2':number < 8? 'tokenAni3':'tokenAni4'}`} 
    style={color ==="blue"?{background:'#4682B4'}:{background:'#DC143C'}}>{prefix}</div>
  )
}

export default Token