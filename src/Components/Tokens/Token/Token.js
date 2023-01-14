
function Token({prefix,color}) {
  return (
    <div className='TokenStyle' style={color ==="blue"?{background:'#4682B4'}:{background:'#DC143C'}}>{prefix}</div>
  )
}

export default Token