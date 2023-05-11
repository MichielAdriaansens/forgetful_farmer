function Matrix({ _canvas }) {
    const canvas = _canvas;
    const ctx = canvas.current.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // window.addEventListener('resize', () => {
    //     canvas.width = window.document.body.clientWidth;
    //     canvas.height = window.innerHeight;
    // });

    class Symbol {
        constructor(x, y, fontSize, canvasHeight) {
            //make a character template file 
            this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            this.x = x;
            this.y = y;
            this.fontSize = fontSize;
            this.text = '';
            this.canvasHeight = canvasHeight;
        }

        draw(context) {
            this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));

            context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
            if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.96) {
                this.y = 0;
            }
            else {
                this.y += 1;
            }
        }
    }

    class Effect {

        constructor(canvasWidth, canvasHeight) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.fontSize = 25;
            this.columns = this.canvasWidth / this.fontSize;
            this.symbols = [];
            this.#initialize();
        }
        //private method for abstraction
        #initialize() {
            for (let i = 0; i < this.columns; i++) {
                this.symbols.push(new Symbol(i, 0, this.fontSize, this.canvasHeight));
            }
        }
    }

    const effect = new Effect(canvas.width, canvas.height);

    let lastTime = 0;
    const fps = 24;
    const nextFrame = 1000 / fps;
    let timer = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        if (timer > nextFrame) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0aff0a';
            ctx.textAlign = 'center';
            ctx.font = effect.fontSize + 'px monospace';
            effect.symbols.forEach(symbol => { symbol.draw(ctx) });

            timer = 0;
        }
        else {
            timer += deltaTime;
            //console.log(timer);
        }

        requestAnimationFrame(animate);
    }
    //0 is nodig want bij de eerste call is er nog geen timeStamp generate
    animate(0);

}

export default Matrix;