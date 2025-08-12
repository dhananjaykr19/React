import React, { useEffect, useRef, useState } from 'react';

const OfflineGame = () => {
    const [jumping, setJumping] = useState(false);
    const [obstacleLeft, setObstacleLeft] = useState(500);
    const [isGameOver, setIsGameOver] = useState(false);

    const playerRef = useRef();
    const obstacleRef = useRef();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "Space" && !jumping && !isGameOver) {
                setJumping(true);
                setTimeout(() => setJumping(false), 500);
            } else if (e.code === "KeyR" && isGameOver) {
                resetGame();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [jumping, isGameOver]);

    useEffect(() => {
        if (isGameOver) return;

        const obstacleInterval = setInterval(() => {
            setObstacleLeft((prev) => {
                if (prev < -50) return 500;
                return prev - 10;
            });
        }, 50);

        return () => clearInterval(obstacleInterval);
    }, [isGameOver]);

    useEffect(() => {
        const collisionCheck = setInterval(() => {
            const playerTop = jumping ? 130 : 200;
            const obstacleRightEdge = obstacleLeft + 50;

            if (
                obstacleLeft < 100 &&
                obstacleRightEdge > 0 &&
                playerTop >= 200
            ) {
                setIsGameOver(true);
            }
        }, 100);

        return () => clearInterval(collisionCheck);
    }, [jumping, obstacleLeft]);

    const resetGame = () => {
        setIsGameOver(false);
        setObstacleLeft(500);
    };

    return (
        <div className='offline-game'>
            <h1>You're Offline</h1>
            <h2>{isGameOver ? "Game Over! Press R to Restart" : "Press Space to Jump!"}</h2>
            <div className='game-area'>
                <div
                    ref={playerRef}
                    className={`player ${jumping ? "jump" : ""}`}
                />
                <div
                    ref={obstacleRef}
                    className='obstacle'
                    style={{ left: `${obstacleLeft}px` }}
                />
            </div>
            {isGameOver && (
                <button onClick={resetGame} style={{ marginTop: 20 }}>Restart</button>
            )}
        </div>
    );
};

export default OfflineGame;
