import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Cargar assets aquí
    // this.load.image('key', 'path/to/image.png');
}

function create() {
    // Inicializar tu juego aquí
    this.add.text(400, 300, '¡Hola Phaser!', {
        fontSize: '32px',
        fill: '#fff'
    }).setOrigin(0.5);
}

function update() {
    // Game loop - se ejecuta 60 veces por segundo
}
