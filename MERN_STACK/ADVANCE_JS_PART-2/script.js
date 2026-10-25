var data = document.getElementById("data");

// Fetching data from the API
// Without callback

const fetchuser = function (username,callback) {
    setTimeout(function() {
        callback(username);  
    }, 2000);
};

const user = fetchuser("Prem", function(user) {
    data.innerHTML = user;
});