import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function DrawingCanvas() {

    const collapseRef = useRef(null);

    const handleButtonClick = () => {
      if (collapseRef.current) {
        // Toggle the collapse using the Bootstrap method
        collapseRef.current.toggle();
      }
    };

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingData, setDrawingData] = useState([]);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    contextRef.current = context;
  }, []);

  const startDrawing = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const continueDrawing = (event) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = event.nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    setDrawingData([]);
  };


  // Inside your component or function
  const sendDataToBackend = async (drawingData) => {
    console.log(drawingData);
    // try {
    //   const response = await axios.post('/api/drawings', { drawingData });
    //   console.log('Drawing data sent successfully:', response.data);
    // } catch (error) {
    //   console.error('Error sending drawing data:', error);
    // }
  };
  

  return (
    // <div>
    //   <canvas
    //     ref={canvasRef}
    //     onMouseDown={startDrawing}
    //     onMouseMove={continueDrawing}
    //     onMouseUp={endDrawing}
    //     onMouseLeave={endDrawing}
    //     style={{margin:"10px"}}
    //   />
    //   <button onClick={clearCanvas}>Clear Canvas</button>
    //   <br />

    //   <button onClick={sendDataToBackend}>Send Canvas</button>

    // </div>

 <div className="container">
      <p className="d-inline-flex gap-1">
        <a
          className="btn btn-primary"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
          onClick={handleButtonClick}
        >
          About Us
        </a>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1" ref={collapseRef}>
            <div className="card card-body" style={{ color: "black" }}>
              Some placeholder content...
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default DrawingCanvas;
