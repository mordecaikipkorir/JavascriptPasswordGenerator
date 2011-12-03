function getRandomNum(lbound, ubound) {
	return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
}

function getRandomChar(number, lower, upper, other, extra) {
	var numberChars = "0123456789";
	var lowerChars = "abcdefghijklmnopqrstuvwxyz";
	var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var otherChars = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
	var charSet = extra;
	if (number == true)
		charSet += numberChars;
	if (lower == true)
		charSet += lowerChars;
	if (upper == true)
		charSet += upperChars;
	if (other == true)
		charSet += otherChars;
	return charSet.charAt(getRandomNum(0, charSet.length));
}
function getPassword(length, extraChars, firstNumber, firstLower, firstUpper,
		firstOther, latterNumber, latterLower, latterUpper, latterOther) {
	var rc = "";
	if (length > 0)
		rc = rc
				+ getRandomChar(firstNumber, firstLower, firstUpper,
						firstOther, extraChars);
	for ( var idx = 1; idx < length; ++idx) {
		rc = rc
				+ getRandomChar(latterNumber, latterLower, latterUpper,
						latterOther, extraChars);
	}
	return rc;
}

function generateNatoAlphabets(password) {
	var nanoalphabets = '';
	for (i = 0; i < password.length; i++) {
		var character = password.charAt(i);
		switch (character) {
		case 'a':
			nanoalphabets += " [Small] Alpha ";
			break;
		case 'b':
			nanoalphabets += " [Small] Bravo ";
			break;
		case 'c':
			nanoalphabets += " [Small] Charlie ";
			break;
		case 'd':
			nanoalphabets += " [Small] Delta ";
			break;
		case 'e':
			nanoalphabets += " [Small] Echo ";
			break;
		case 'f':
			nanoalphabets += " [Small] Foxtrot ";
			break;
		case 'g':
			nanoalphabets += " [Small] Golf ";
			break;
		case 'h':
			nanoalphabets += " [Small] Hotel ";
			break;
		case 'i':
			nanoalphabets += " [Small] India ";
			break;
		case 'j':
			nanoalphabets += " [Small] Juliet ";
			break;
		case 'k':
			nanoalphabets += " [Small] Kilo ";
			break;
		case 'l':
			nanoalphabets += " [Small] Lima ";
			break;
		case 'm':
			nanoalphabets += " [Small] Mike ";
			break;
		case 'n':
			nanoalphabets += " [Small] November ";
			break;
		case 'o':
			nanoalphabets += " [Small] Oscar ";
			break;
		case 'p':
			nanoalphabets += " [Small] Papa ";
			break;
		case 'q':
			nanoalphabets += " [Small] Quebec ";
			break;
		case 'r':
			nanoalphabets += " [Small] Romeo ";
			break;
		case 's':
			nanoalphabets += " [Small] Sierra ";
			break;
		case 't':
			nanoalphabets += " [Small] Tango ";
			break;
		case 'u':
			nanoalphabets += " [Small] Uniform ";
			break;
		case 'v':
			nanoalphabets += " [Small] Victor ";
			break;
		case 'w':
			nanoalphabets += " [Small] Whiskey ";
			break;
		case 'x':
			nanoalphabets += " [Small] Xray ";
			break;
		case 'y':
			nanoalphabets += " [Small] Yankee ";
			break;
		case 'z':
			nanoalphabets += " [Small] Zulu ";
			break;
		case 'A':
			nanoalphabets += " [Capital] Alpha ";
			break;
		case 'B':
			nanoalphabets += " [Capital] Bravo ";
			break;
		case 'C':
			nanoalphabets += " [Capital] Charlie ";
			break;
		case 'D':
			nanoalphabets += " [Capital] Delta ";
			break;
		case 'E':
			nanoalphabets += " [Capital] Echo ";
			break;
		case 'F':
			nanoalphabets += " [Capital] Foxtrot ";
			break;
		case 'G':
			nanoalphabets += " [Capital] Golf ";
			break;
		case 'H':
			nanoalphabets += " [Capital] Hotel ";
			break;
		case 'I':
			nanoalphabets += " [Capital] India ";
			break;
		case 'J':
			nanoalphabets += " [Capital] Juliet ";
			break;
		case 'K':
			nanoalphabets += " [Capital] Kilo ";
			break;
		case 'L':
			nanoalphabets += " [Capital] Lima ";
			break;
		case 'M':
			nanoalphabets += " [Capital] Mike ";
			break;
		case 'N':
			nanoalphabets += " [Capital] November ";
			break;
		case 'O':
			nanoalphabets += " [Capital] Oscar ";
			break;
		case 'P':
			nanoalphabets += " [Capital] Papa ";
			break;
		case 'Q':
			nanoalphabets += " [Capital] Quebec ";
			break;
		case 'R':
			nanoalphabets += " [Capital] Romeo ";
			break;
		case 'S':
			nanoalphabets += " [Capital] Sierra ";
			break;
		case 'T':
			nanoalphabets += " [Capital] Tango ";
			break;
		case 'U':
			nanoalphabets += " [Capital] Uniform ";
			break;
		case 'V':
			nanoalphabets += " [Capital] Victor ";
			break;
		case 'W':
			nanoalphabets += " [Capital] Whiskey ";
			break;
		case 'X':
			nanoalphabets += " [Capital] Xray ";
			break;
		case 'Y':
			nanoalphabets += " [Capital] Yankee ";
			break;
		case 'Z':
			nanoalphabets += " [Capital] Zulu ";
			break;
		case 'Z':
			nanoalphabets += " [Capital] Zulu ";
			break;
		case '1':
			nanoalphabets += "Wun ";
			break;
		case '2':
			nanoalphabets += "Two ";
			break;
		case '3':
			nanoalphabets += "Tree ";
			break;
		case '4':
			nanoalphabets += "Fower ";
			break;
		case '5':
			nanoalphabets += "Fife ";
			break;
		case '6':
			nanoalphabets += "Six ";
			break;
		case '7':
			nanoalphabets += "Seven ";
			break;
		case '8':
			nanoalphabets += "Ait ";
			break;
		case '9':
			nanoalphabets += "Niner ";
			break;
		case '0':
			nanoalphabets += "Zero ";
			break;
		default:
			nanoalphabets += character + ' ';
		}
	}
	return nanoalphabets;
}

function generatePassword() {
	
	var password = getPassword(
			document.myform.passwordLength.value,
			document.myform.extraChars.value,
			document.myform.firstNumber.checked,
			document.myform.firstLower.checked,
			document.myform.firstUpper.checked,
			document.myform.firstOther.checked,
			document.myform.latterNumber.checked,
			document.myform.latterLower.checked,
			document.myform.latterUpper.checked,
			document.myform.latterOther.checked);
	var nanoalphabets = generateNatoAlphabets(password);
	
	document.myform.password.value = password;
	document.getElementById('nanoalphabets').innerHTML = nanoalphabets;
}
