interface Vehicle {
    getSpeed(): number;
    getVehicleType: string;
    isTaxPayed(): boolean;
    isLightsOn(): boolean;
    isLightsOff(): boolean;
    startEngine(): void;
    accelerate(): number;
    stopEngine(): void;
    startRadio(): void;
    playCd: void;
    stopRadio(): void;
}