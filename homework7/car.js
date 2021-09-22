class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(brand) {
    if (typeof brand === "string" && brand.length >= 1 && brand.length <= 50) {
      this.#brand = brand;
    } else {
      throw new Error(
        "Ошибка! Значение brand должно быть строкой от 1 до 50 символов"
      );
    }
  }

  get brand() {
    return this.#brand;
  }

  set model(model) {
    if (typeof model === "string" && model.length >= 1 && model.length <= 50) {
      this.#model = model;
    } else {
      throw new Error(
        "Ошибка! Значение model должно быть строкой от 1 до 50 символов"
      );
    }
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(yearOfManufacturing) {
    let currentYear = new Date().getFullYear();
    if (
      yearOfManufacturing >= 1900 &&
      yearOfManufacturing <= currentYear &&
      Number.isFinite(yearOfManufacturing)
    ) {
      this.#yearOfManufacturing = yearOfManufacturing;
    } else {
      throw new Error(
        "Ошибка! Значение yearOfManufacturing должно быть числом от 1900 до текущего года"
      );
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(maxSpeed) {
    if (maxSpeed >= 100 && maxSpeed <= 300 && Number.isFinite(maxSpeed)) {
      this.#maxSpeed = maxSpeed;
    } else {
      throw new Error(
        "Ошибка! Значение maxSpeed должно быть числом от 100 до 300"
      );
    }
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(maxFuelVolume) {
    if (
      maxFuelVolume >= 5 &&
      maxFuelVolume <= 20 &&
      Number.isFinite(maxFuelVolume)
    ) {
      this.#maxFuelVolume = maxFuelVolume;
    } else {
      throw new Error(
        "Ошибка! Значение maxFuelVolume должно быть числом от 5 до 20"
      );
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(fuelConsumption) {
    if (fuelConsumption > 0 && Number.isFinite(fuelConsumption)) {
      this.#fuelConsumption = fuelConsumption;
    } else {
      throw new Error(
        "Ошибка! Значение fuelConsumption должно быть неотрицательным числом"
      );
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error("Машина уже заведена");
    } else {
      this.#isStarted = true;
    }
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error("Машина ещё не заведена");
    } else {
      this.#isStarted = false;
    }
  }

  fillUpGasTank(litersOfGas) {
    if (!Number.isFinite(litersOfGas) || litersOfGas <= 0) {
      throw new Error("Неверное количество топлива для заправки");
    } else if (this.#currentFuelVolume + litersOfGas > this.#maxFuelVolume) {
      throw new Error("Топливный бак переполнен");
    } else {
      this.#currentFuelVolume += litersOfGas;
    }
  }

  drive(speed, time) {
    if (!Number.isFinite(speed) || speed <= 0) {
      throw new Error("Неверная скорость");
    }
    if (!Number.isFinite(time) || time <= 0) {
      throw new Error("Неверное количество часов");
    }
    if (speed > this.#maxSpeed) {
      throw new Error("Машина не может ехать так быстро");
    }
    if (!this.#isStarted) {
      throw new Error("Машина должна быть заведена, чтобы ехать");
    }
    let fuelUsedUp = ((speed * time) / 100) * this.#fuelConsumption;
    if (this.#currentFuelVolume < fuelUsedUp) {
      throw new Error("Недостаточно топлива");
    }
    this.#currentFuelVolume -= fuelUsedUp;
    this.#mileage += speed * time;
  }
}

module.exports = { Car };
