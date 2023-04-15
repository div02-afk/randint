function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
  
  // Example:
  
  console.log(  
    between(0, 100)
  )