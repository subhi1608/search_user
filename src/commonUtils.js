const filterData =  (value,originalUsers) => {
    const results = [];
    for (const obj of originalUsers) {
    const matches = {};
      for (const key in obj) {
          if (typeof obj[key] === 'string' ) {
            const matchIndex = obj[key].toLowerCase().indexOf(value.toLowerCase());
            if (matchIndex !== -1) {
              matches[key] = {
                startIndex: matchIndex,
                endIndex: matchIndex + value.length,
              };
              break;
            }
        } else if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i++) {
                const matchIndex =obj[key] && obj[key][i] && obj[key][i].toLowerCase().indexOf(value.toLowerCase());
                if (matchIndex !== -1) {
                  matches[key] = {
                    index: i,
                    startIndex: matchIndex,
                    endIndex: matchIndex + value.length,
                  };
                  break;
                }
            }
        }
      }
      if (Object.keys(matches).length > 0) {
          results.push({ ...obj, matches });
        }
    }
    return results;
}

export {filterData}