function showZodiac() {
    const birthdate = document.getElementById('birthdate').valueAsDate;
    if (!birthdate) {
        alert("Please enter your birthdate");
        return;
    }

    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();
    const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"
    ];
    const lastDay = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21, 19];
    const zodiac = zodiacSigns[month - (day > lastDay[month - 1] ? 0 : 1)];

    document.getElementById('zodiac').innerText = `Your Zodiac Sign is: ${zodiac}`;
}