import { Heart } from "iconsax-react";
import React, { useRef, useState } from "react";

interface MagnifyProps {
    imageUrl: string;
    initialScale?: number;
    isWishlisted: boolean;
}

const MagnifyImage: React.FC<MagnifyProps> = ({ imageUrl, initialScale = 1, isWishlisted }) => {
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const imageRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const magnifyFactor = 2; // Adjust the magnification factor as needed

    const calculatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = imageRef.current?.getBoundingClientRect();
        const x = e.clientX - (rect?.left || 0);
        const y = e.clientY - (rect?.top || 0);
        setPosition({ x, y });
    };

    return (
        <div
            className='overflow-hidden relative h-full w-full'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={calculatePosition}
            ref={imageRef}
        >
            <img
                alt=""
                src={imageUrl}
                className={`h-full w-full overflow-hidden object-cover`}
                style={{
                    transformOrigin: `${position.x}px ${position.y}px`,
                    transform: `scale(${hovered ? magnifyFactor : initialScale})`,
                }}
            />
            <div onClick={() => {}} className="absolute top-5 right-5 bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer wish-item">
                {isWishlisted ? <Heart size="20" color="#FF8A65" variant="Bold" /> : <Heart size="20" color="#FF8A65" />}
            </div>
        </div>
    );
};

export default MagnifyImage