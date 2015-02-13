<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link href='http://fonts.googleapis.com/css?family=Oxygen:400,700' rel='stylesheet' type='text/css'>
    <script src="js/bootstrap.min.js" ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
</head>
<body>
    <style>
    * { margin:0; padding:0; } /* to remove the top and left whitespace */
html, body { width:100%; height:100%; } /* just to be sure these are full screen*/
canvas { display:block; } /* To remove the scrollbars */
    </style>
    <h2 class="centered" style="color: white;">Mitchell Vitez</h2>
    <canvas id="canvas"></canvas>
    <script type="text/javascript">
    (function() {
        var canvas = document.getElementById('canvas'), context = canvas.getContext('2d');
        var width = 0;
        var height = 0;

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        
        function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                width = canvas.width;
                height = canvas.height;
                
                /**
                 * Your drawings need to be inside this function otherwise they will be reset when 
                 * you resize the browser window and the canvas goes will be cleared.
                 */
                drawStuff(); 
        }
        resizeCanvas();
        function drawStuff() {
              var canvas = document.getElementById('canvas');
              var context = canvas.getContext('2d');
              draw();

        }

        function draw() {
            context.beginPath();
              context.moveTo(getRandomInt(0, width), getRandomInt(0, width));
              context.lineTo(getRandomInt(0, width), getRandomInt(0, width));
              context.lineWidth = getRandomInt(1, 20);

              // set line color
              context.strokeStyle = randomColor();
              context.stroke();
              setTimeout(draw, 100);
        }

        function randomColor() {
            return '#'+Math.floor(Math.random()*16777215).toString(16);
        }

        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        resizeCanvas();
       })();      
    </script>
</body>