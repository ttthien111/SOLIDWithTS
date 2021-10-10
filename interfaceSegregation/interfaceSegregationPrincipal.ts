interface Vehicle {
    getSpeed(): number;
    getVehicleType: string;
    isTaxPayed(): boolean;
    isLightsOn(): boolean;
}

interface Lights {
    isLightsOn(): boolean;
    isLightsOff(): boolean;
}

interface Radio {
    startRadio(): void;
    playCd: void;
    stopRadio(): void;
}

interface Engine {
    startEngine(): void;
    accelerate(): number;
    stopEngine(): void;
}