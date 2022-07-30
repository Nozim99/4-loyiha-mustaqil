import "../styles/loader.css"

const Loader = () => {
    return (
        <h1 className="Loader-h1">
        <span className="Loader-span h1 text-black let1">l</span>  
        <span className="Loader-span h1 text-black let2">o</span>  
        <span className="Loader-span h1 text-black let3">a</span>  
        <span className="Loader-span h1 text-black let4">d</span>  
        <span className="Loader-span h1 text-black let5">i</span>  
        <span className="Loader-span h1 text-black let6">n</span>  
        <span className="Loader-span h1 text-black let7">g</span>  
      </h1>
    );
};

const Loader2 = ()=>{
  return(
    <div className="loader-2_color">
      <div className="loader-2">Loading...</div>
    </div>
  )
}

export {Loader, Loader2};