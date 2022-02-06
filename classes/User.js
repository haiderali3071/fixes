class User {
  calculateTime = (updateDate: Date) => {
    let message = '';
    updateDate = new Date(updateDate);
    const currDate = new Date();
    const diffTime = Math.abs(updateDate - currDate) / 60000;
    let minutes = parseFloat(diffTime).toFixed(0);
    if (minutes < 60) {
      if (minutes < 2) {
        message = minutes + ' minute ago';
      } else {
        message = minutes + ' minutes ago';
      }
    } else {
      let hours = minutes / 60;
      if (hours < 24) {
        hours = parseFloat(hours).toFixed(0);
        if (hours < 2) {
          message = hours + ' hour ago';
        } else {
          message = hours + ' hours ago';
        }
      } else {
        let days = hours / 24;
        days = parseFloat(days).toFixed(0);
        if (days < 2) {
          message = days + ' day ago';
        } else {
          message = days + ' days ago';
        }
      }
    }

    return message;
  };

  calculatePostTime = (updateDate: Date)=>{
    let message = '';
    updateDate = new Date(updateDate);
    const currDate = new Date();
    const diffTime = Math.abs(updateDate - currDate) / 60000;
    let minutes = parseFloat(diffTime).toFixed(0);
    if (minutes < 60) {
     message = minutes + 'm';
    } else {
      let hours = minutes / 60;
      if (hours < 24) {
        hours = parseFloat(hours).toFixed(0);
        message = hours + 'h';
      } else {
        let days = hours / 24;
        days = parseFloat(days).toFixed(0);
        message = days + 'd';
      }
    }

    return message;
  }

  calculateCommentTime = (updateDate: Date)=>{
    let message = '';
    updateDate = new Date(updateDate);
    const currDate = new Date();
    const diffTime = Math.abs(updateDate - currDate) / 60000;
    let minutes = parseFloat(diffTime).toFixed(0);
    if (minutes < 60) {
     message = minutes + ' min';
    } else {
      let hours = minutes / 60;
      if (hours < 24) {
        hours = parseFloat(hours).toFixed(0);
        message = hours + ' hour';
      } else {
        let days = hours / 24;
        days = parseFloat(days).toFixed(0);
        message = days + ' day';
      }
    }

    return message;
  }
}
export default User;
