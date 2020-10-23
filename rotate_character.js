const rotate = (items, rotations = 1, clockwise = true) => {
    let rotatedItems = [items.length - 1];
    let count = 0;
    let j = 1;
    while (count < rotations) {
      if (clockwise) {
        j = 1;
        rotatedItems = [items.length];
        rotatedItems[0] = items[items.length - 1];
        for (let i = 0; i < items.length - 1; i++) {
          rotatedItems[j] = items[i];
          j++;
        }
        items = rotatedItems;
        console.log(rotatedItems);
      }else{
        j = 0;
        rotatedItems = [items.length];
        rotatedItems[items.length - 1] = items[0];
        for (let i = 1; i <= items.length - 1; i++) {
          rotatedItems[j] = items[i];
          j++;
        }
        items = rotatedItems;
        console.log(rotatedItems);
  
      }
      count += 1;
    }
  };
  
  rotate(['h', 'e', 'l', 'l', 'o'], 5, false);