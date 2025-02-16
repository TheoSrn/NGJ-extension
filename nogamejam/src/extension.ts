import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Extension no game jam est ativé.');

    function showWebview() {
        const panel = vscode.window.createWebviewPanel(
            'NoGameJam',
            'NoGameJam',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
            }
        );

        panel.webview.html = getWebviewContent();
    }

	function getWebviewContent(): string {
		const videoUrl = "https://www.youtube.com/watch?v=eRXE8Aebp7s";
		const gifs = [
			"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjl0OWI3ZXZpcHU1dGJseWhobGh5a2ExMmFkOWV5bTd3ZjM2NHVvbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hM4OekkycahSas09bD/giphy.gif",
			"https://media.giphy.com/media/ieaUdBJJC19uw/giphy.gif?cid=790b7611hy5knn33wjep667nff5fagf7j5d8zv31oih2h3ix&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/4RkV3Sp6XBmzC/giphy.gif?cid=790b7611hy5knn33wjep667nff5fagf7j5d8zv31oih2h3ix&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/l3fQwP0Fv7ek6uPWU/giphy.gif?cid=790b7611hy5knn33wjep667nff5fagf7j5d8zv31oih2h3ix&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3vDS40dDjCITTfCBUY/giphy.gif?cid=790b7611hy5knn33wjep667nff5fagf7j5d8zv31oih2h3ix&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/VofiGkwOdH2fu/giphy.gif?cid=ecf05e4726avocae23er1jglxfrhmqw423j5x18ah7c2rdvx&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/MDXomrcGshGso/giphy.gif?cid=ecf05e4726avocae23er1jglxfrhmqw423j5x18ah7c2rdvx&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/h2zhIZFmeueAw/giphy.gif?cid=ecf05e4726avocae23er1jglxfrhmqw423j5x18ah7c2rdvx&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/MIY4jpusckRmU/giphy.gif?cid=ecf05e47r32rvugbabbvkl3m4jqdtsxtb4hz0n2est8mhvsa&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/J3ODsTxAB7U7m/giphy.gif?cid=ecf05e477rxjktz8tabp5ah3cc7ufca3ah59wxioe3hf080u&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/xT4Ap6ClRlLYFTb8GY/giphy.gif?cid=ecf05e47bpdsoq6m3nojsv90tcx76q2pzdf3hgsujqpaivwi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/wgulDksxJ3Sve/giphy.gif?cid=ecf05e47bpdsoq6m3nojsv90tcx76q2pzdf3hgsujqpaivwi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/dRGWII2nDN1D2/giphy.gif?cid=ecf05e47wdfy71wqfaku0khc7uxggu5nn4vg0qooz8s026cj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/YKsDwhPMhh9S0/giphy.gif?cid=ecf05e47wdfy71wqfaku0khc7uxggu5nn4vg0qooz8s026cj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/KSnHaVWtCxisU/giphy.gif?cid=ecf05e473ssfpi3pwx9qdebmkd0vbz3wza4q9aniybe8f7at&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/EmMWgjxt6HqXC/giphy.gif?cid=ecf05e47j0ik5b16k72jg218mrcfasx6w7g1m322awszsdxj&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3ohs7TZ2YBPgYwL89G/giphy.gif?cid=ecf05e47r8n3mt9nhrnrnqsvzwl5dsc6cmmmh358c9zydceh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/dmucaITbJPSY8/giphy.gif?cid=ecf05e47gmpygrg8rgpdf3yn39pqtxavwdirbwr44i1acwqk&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/TabwFck9vEt44/giphy.gif?cid=ecf05e4797ovq7repfczr1tipa0e5hfxga9ckugaa9jj0t6d&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/xc6ijwxQwcPfO/giphy.gif?cid=ecf05e4797ovq7repfczr1tipa0e5hfxga9ckugaa9jj0t6d&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/lKKXOCVviOAXS/giphy.gif?cid=ecf05e4797ovq7repfczr1tipa0e5hfxga9ckugaa9jj0t6d&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/7lw2GOGMEyLm0/giphy.gif?cid=ecf05e47j4csb56qjsz4gvuggj2h2w7ynzyylrqydotrf8ae&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3oxRmzXOf26j5hdwrK/giphy.gif?cid=ecf05e4713ykrcozdlk99clsefuwh3rhpeug18g1wk0zbz5n&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/wTgYlmxctT2O4/giphy.gif?cid=ecf05e4713ykrcozdlk99clsefuwh3rhpeug18g1wk0zbz5n&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/14aumMYgx9CvKw/giphy.gif?cid=ecf05e4713ykrcozdlk99clsefuwh3rhpeug18g1wk0zbz5n&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3o85xJx8kj5ryC9aEg/giphy.gif?cid=ecf05e47313jf55zmm0b52tbs93lk2tlqhlwtzan7qasub78&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/1TZcHxWqmBpf2/giphy.gif?cid=ecf05e47bal62x1mwkfcy960t6bs47fiic80uoe6fsmy58ji&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/6thzUiDtRozQI/giphy.gif?cid=ecf05e47bal62x1mwkfcy960t6bs47fiic80uoe6fsmy58ji&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/l41lWzj9rtQy1Z91S/giphy.gif?cid=ecf05e4787qxjfgpvmg0ftn0f0uhxphsf5cp05u5cfmomsse&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3OHA2GuEih6zphHvNI/giphy.gif?cid=ecf05e474jqmerm00anw8fjfkuvufsupj8yq8qla19ppxuoz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3o85xmxxIoGhJMkwes/giphy.gif?cid=ecf05e474jqmerm00anw8fjfkuvufsupj8yq8qla19ppxuoz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/xT9DPDaFp65bRP0Ruo/giphy.gif?cid=ecf05e47i2n5dib22crzxcmq1piu2d68xu9nvgmej4fov4t5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/eDUHhtooZxyhi/giphy.gif?cid=ecf05e47h4qls01zewp3ccwiex8oak6uz17iluz218agc9kp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/8UGoPsk9dSkkcQrzT0/giphy.gif?cid=ecf05e47h4qls01zewp3ccwiex8oak6uz17iluz218agc9kp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/11ZSwQNWba4YF2/giphy.gif?cid=ecf05e47o9yzhn5yycn7ix3dx2s6zrabndciytyjc7cz6vz2&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/JNyScDOQLHTbDyeQpA/giphy.gif?cid=ecf05e47o9yzhn5yycn7ix3dx2s6zrabndciytyjc7cz6vz2&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/Z1BTGhofioRxK/giphy.gif?cid=ecf05e47ohjsgwd9a088lnkhp4ktoli3irol24lsx2p09sxi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/xTiN0HL2iq3oHF1852/giphy.gif?cid=ecf05e47ohjsgwd9a088lnkhp4ktoli3irol24lsx2p09sxi&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/79erLlK2pt2zm/giphy.gif?cid=ecf05e477xfk7bev2qibcyaw3aw9skmtucs68g20ic0fzg6n&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/WjGSZoU6SCb29I8gLs/giphy.gif?cid=ecf05e47q7whyme3ihhtryayt85k3fau0is1e9uepa2bul29&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/cdtnU46YTOMTe/giphy.gif?cid=ecf05e47q7whyme3ihhtryayt85k3fau0is1e9uepa2bul29&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/cXSWlQ0j4Vta8/giphy.gif?cid=ecf05e47q7whyme3ihhtryayt85k3fau0is1e9uepa2bul29&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/plxn930XBwWndUuGct/giphy.gif?cid=ecf05e47i20ggtd512yvfxmhnv5gdz8gv0fzerprmz6iyper&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/goIcmbcUMEnyE/giphy.gif?cid=ecf05e47i20ggtd512yvfxmhnv5gdz8gv0fzerprmz6iyper&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/Y2CgrQyxLSiS4/giphy.gif?cid=ecf05e47i20ggtd512yvfxmhnv5gdz8gv0fzerprmz6iyper&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/gQrwpBthuEAKc/giphy.gif?cid=ecf05e47i20ggtd512yvfxmhnv5gdz8gv0fzerprmz6iyper&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/l0O7NvDd6lifNaNuo/giphy.gif?cid=ecf05e47i20ggtd512yvfxmhnv5gdz8gv0fzerprmz6iyper&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3oD3YmMSyk0jAtvkU8/giphy.gif?cid=ecf05e47p1f7dxgfim44961zs245btrf2fxcdy7x35e7jz13&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3o85xmveqgyGLtp4OI/giphy.gif?cid=ecf05e47p1f7dxgfim44961zs245btrf2fxcdy7x35e7jz13&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/TeinpBGRY5UOc/giphy.gif?cid=ecf05e47313jf55zmm0b52tbs93lk2tlqhlwtzan7qasub78&ep=v1_gifs_search&rid=giphy.gif&ct=g",
			"https://media.giphy.com/media/3o7qEbukQhgu3v1Ci4/giphy.gif?cid=ecf05e4713ykrcozdlk99clsefuwh3rhpeug18g1wk0zbz5n&ep=v1_gifs_search&rid=giphy.gif&ct=g",
		];
	
		return `
			<!DOCTYPE html>
			<html lang="fr">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Popup Web</title>
				<style>
					* {
						margin: 0;
						padding: 0;
						border: 0;
						box-sizing: border-box;
					}
					html, body {
						width: 100%;
						height: 100%;
						overflow: hidden;
						background-color: #000;
						display: flex;
						justify-content: center;
						align-items: center;
						position: relative;
						color: white;
						font-family: Arial, sans-serif;
					}
					.content {
						text-align: center;
					}
					.gif {
						width: 200px; /* Taille des GIFs */
						height: 200px;
						margin-top: 10px;
						margin-bottom: 20px;
						display: none; /* Les GIFs sont cachés par défaut */
						margin-right: 10px; /* Espace à droite de chaque GIF */
						margin-left: 10px;  /* Espace à gauche de chaque GIF */
					}
					button {
						background-color: #4CAF50;
						border: none;
						color: white;
						padding: 10px 20px;
						text-align: center;
						text-decoration: none;
						display: inline-block;
						font-size: 16px;
						margin: 10px;
						cursor: pointer;
						border-radius: 5px;
					}
					button:hover {
						background-color: #45a049;
					}
					.button-container {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
					}
					.button-container button {
						margin: 10px;
					}
					.gif-container {
						display: flex;
						justify-content: center;
						flex-wrap: wrap;
					}
					.error-message {
						color: red;
						margin-top: 20px;
						font-size: 16px;
					}
					.counter {
                    margin-left: 10px;
                    color:rgb(165, 0, 0);
                	}
				</style>
			</head>
			<body>
				<div class="content">
					<h1>Alors on procrastine ?</h1>
					<span id="counter" class="counter">00</span>
					<p>L'extension la plus usless jamais créée</p>
					<div class="button-container">
						<button onclick="showRandomGif()">Afficher un GIF</button>
						<button onclick="increaseGifCount()">Augmenter le nombre de GIFs</button>
						<button onclick="decreaseGifCount()">Diminuer le nombre de GIFs</button>
					</div>

					<div class="gif-container" id="gifContainer">
						<img id="gif0" class="gif" src="" alt="GIF animé" />
					</div>
					<div id="errorMessage" class="error-message"></div>
				</div>

				<script>
					let seconds = 0;
                    let minutes = 0;
                    let hours = 0;
					let gifCount = 1;
					const maxGifs = 8;
					const minGifs = 1;
					const gifs = ${JSON.stringify(gifs)};
					const displayedGifs = new Set();

					function showRandomGif() {
						const gifContainer = document.getElementById('gifContainer');
						const errorMessage = document.getElementById('errorMessage');

						gifContainer.innerHTML = '';
						displayedGifs.clear();

						for (let i = 0; i < gifCount; i++) {
							let randomIndex;
							do {
								randomIndex = Math.floor(Math.random() * gifs.length);
							} while (displayedGifs.has(randomIndex));
							
							displayedGifs.add(randomIndex);

							const gifElement = document.createElement('img');
							gifElement.classList.add('gif');
							gifElement.src = gifs[randomIndex];
							gifElement.style.display = 'block';
							gifContainer.appendChild(gifElement);
						}
						errorMessage.textContent = '';
					}

					function increaseGifCount() {
						const errorMessage = document.getElementById('errorMessage');

						if (gifCount < maxGifs) {
							gifCount++;
							showRandomGif();
							errorMessage.textContent = '';
						} else {
							errorMessage.textContent = 'Le nombre maximal de GIFs affichables est ' + maxGifs + '.';
						}
					}

					function decreaseGifCount() {
						const errorMessage = document.getElementById('errorMessage');

						if (gifCount > minGifs) {
							gifCount--;
							showRandomGif();
							errorMessage.textContent = '';
						}
					}

					showRandomGif();

					function updateCounter() {
                        seconds++;

                        if (seconds >= 60) {
                            seconds = 0;
                            minutes++;
                        }
                        if (minutes >= 60) {
                            minutes = 0;
                            hours++;
                        }

                        let displayTime = seconds.toString().padStart(2, '0');
                        if (minutes > 0 || hours > 0) {
                            displayTime = minutes.toString().padStart(2, '0') + ':' + displayTime;
                        }
                        if (hours > 0) {
                            displayTime = hours.toString().padStart(2, '0') + ':' + displayTime;
                        }

                        document.getElementById('counter').textContent = displayTime;
                    }

                    setInterval(updateCounter, 1000);

					setTimeout(() => {
						window.location.href = "${videoUrl}";
					}, 1800000);
				</script>
			</body>
			</html>
		`;
	}

    setInterval(showWebview, 1800000);

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.showPopup', showWebview)
    );
}

export function deactivate() {}
