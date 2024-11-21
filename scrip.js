let currentUser = null;

function showLogin() {
    document.getElementById('mainContent').innerHTML = `
        <h2>පද්ධතියට පිවිසෙන්න</h2>
        <form onsubmit="login(event)">
            <div class="form-group">
                <label for="username">පරිශීලක නාමය:</label>
                <input type="text" id="username" required>
            </div>
            <div class="form-group">
                <label for="password">මුරපදය:</label>
                <input type="password" id="password" required>
            </div>
            <button type="submit">පිවිසෙන්න</button>
        </form>
    `;
}

function showRegister() {
    document.getElementById('mainContent').innerHTML = `
        <h2>නව ගිණුමක් සාදන්න</h2>
        <form onsubmit="register(event)">
            <div class="form-group">
                <label for="regUsername">පරිශීලක නාමය:</label>
                <input type="text" id="regUsername" required>
            </div>
            <div class="form-group">
                <label for="regPassword">මුරපදය:</label>
                <input type="password" id="regPassword" required>
            </div>
            <div class="form-group">
                <label for="role">කාර්යභාරය:</label>
                <select id="role" required>
                    <option value="student">සිසුවා</option>
                    <option value="teacher">ගුරුවරයා</option>
                </select>
            </div>
            <div class="form-group">
                <label for="grade">ශ්‍රේණිය:</label>
                <select id="grade" required>
                    <option value="10">10 ශ්‍රේණිය</option>
                    <option value="11">11 ශ්‍රේණිය</option>
                    <option value="12">12 ශ්‍රේණිය</option>
                    <option value="13">13 ශ්‍රේණිය</option>
                </select>
            </div>
            <button type="submit">ලියාපදිංචි වන්න</button>
        </form>
    `;
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'manjula' && password === '13755') {
        currentUser = { username, role: 'teacher' };
        showDashboard();
    } else {
        alert('වැරදි පරිශීලක නාමය හෝ මුරපදය');
    }
}

function register(event) {
    event.preventDefault();
    // මෙහි ලියාපදිංචි තර්කය ඇතුළත් කරන්න
    alert('ලියාපදිංචිය සාර්ථකයි');
    showLogin();
}

function showDashboard() {
    if (currentUser.role === 'teacher') {
        document.getElementById('mainContent').innerHTML = `
            <h2>ස්වාගතයි, ${currentUser.username}!
            නව වීඩියෝවක් එකතු කරන්න
            

        `;
        loadVideos();
    } else {
        // සිසුන් සඳහා dashboard
    }
}

function showAddVideo() {
    document.getElementById('mainContent').innerHTML = `
        
නව වීඩියෝවක් එකතු කරන්න

        

            

                මාතෘකාව:
                
            

            

                YouTube URL:
                
            

            

                විෂයය:
                
ව්‍යාපාර අධ්‍යයනය
ගිණුම්කරණය
ආර්ථික විද්‍යාව

            

            

                ශ්‍රේණිය:
                
10 ශ්‍රේණිය
11 ශ්‍රේණිය
12 ශ්‍රේණිය
13 ශ්‍රේණිය

            

            වීඩියෝව එකතු කරන්න
        

    `;
}

function addVideo(event) {
    event.preventDefault();
    const title = document.getElementById('videoTitle').value;
    const url = document.getElementById('videoUrl').value;
    const subject = document.getElementById('videoSubject').value;
    const grade = document.getElementById('videoGrade').value;

    const video = { title, url, subject, grade, date: new Date().toISOString() };
    
    let videos = JSON.parse(localStorage.getItem('videos')) || [];
    videos.push(video);
    localStorage.setItem('videos', JSON.stringify(videos));

    alert('වීඩියෝව සාර්ථකව එකතු කරන ලදී');
    showDashboard();
}

function loadVideos() {
    const videos = JSON.parse(localStorage.getItem('videos')) || [];
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = '
වීඩියෝ ලැයිස්තුව
';
    
    if (videos.length === 0) {
        videoList.innerHTML += '

වීඩියෝ නැත

';
    } else {
        const videoGrid = document.createElement('div');
        videoGrid.className = 'video-list';
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                
${video.title}</h4> <p>විෂයය: ${video.subject}

ශ්‍රේණිය: ${video.grade}</p> <p>දිනය: ${new Date(video.date).toLocaleDateString()}

වීඩියෝව බලන්න</a> `; videoGrid.appendChild(videoItem); }); videoList.appendChild(videoGrid); } } // ආරම්භයේ
