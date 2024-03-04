const Fixr = () => {
  return (
    <section className="bg-gray-900 flex items-center justify-center h-screen" id="tickets">
      <iframe src="https://fixr.co/event/43708514?compact=true&theme=dark" 
        width="80%" 
        height="80%"
        title="Tickets"
      >
      </iframe>
      {/* <div style={{ height: "1000px" }} className="flex justify-center items-center p-10">
        <p className="text-white text-4xl">Tickets coming soon...</p>
      </div> */}
    </section>
  )
}

export default Fixr;