const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18"),
};

let medicineNames = (obj) => Object.keys(obj);

console.log(medicineNames(medicines));

let avaliableMedicines = medicineNames(medicines).filter(medicineName => medicines[medicineName] >= Date.now());

console.log(avaliableMedicines);

avaliableMedicines.sort((a, b) => medicines[a] - medicines[b]);

console.log(avaliableMedicines);