// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;  // Headquarters at 42nd street
    if (pickupLocation >= 42) {
      return pickupLocation - hqLocation;
    } else {
      return hqLocation - pickupLocation;
    }
  }

  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;  // Headquarters at 42nd street
    return Math.abs(pickupLocation - hqLocation);
  }
  

  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free ride
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate of $25 for distances over 2000 feet but within 2500 feet
    } else {
      return 'cannot travel that far'; // For distances over 2500 feet
    }
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  

  