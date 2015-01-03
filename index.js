var chalk = require('chalk');
var readline2 = require('readline2');
var _ = require('lodash');

var pcbColors = {
	'@X07': chalk.styles.reset.open + chalk.styles.white.open,
	'@X08': chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.grey.open,
	'@X0F': chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.white.open,
	'@X02': chalk.styles.reset.open + chalk.styles.green.open,
	'@X0A': chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.green.open
};

var lengths = [19, 17, 15, 17, 19, 19, 13, 15, 33, 33, 31, 31, 31, 27, 27];

var styles = [];

function setStyles(colors, color) {

	var prompt = 'press enter to continue';

	// Animated styles

	styles[0] = [
		colors[0] + "." + colors[1] + "o" + colors[2] + "O Press Enter O" + colors[1] + "o" + colors[0] + ".",
		colors[0] + "." + colors[1] + "o" + colors[2] + "O " + colors[1] + "Press Enter " + colors[2] + "O" + colors[1] + "o" + colors[0] + ".",
		colors[1] + "." + colors[1] + "o" + colors[2] + "O " + colors[0] + "Press Enter " + colors[2] + "O" + colors[1] + "o.",
		colors[0] + "." + colors[1] + "o" + colors[2] + "O Press Enter " + colors[2] + "O" + colors[1] + "o" + colors[0] + "."
	];

	styles[1] = [
		colors[2] + "." + colors[1] + "." + colors[0] + ".Press Enter." + colors[1] + "." + colors[2] + ".",
		colors[1] + "." + colors[2] + "." + colors[1] + "." + colors[0] + "Press Enter" + colors[1] + "." + colors[2] + "." + colors[1] + ".",
		colors[0] + "." + colors[1] + "." + colors[2] + "." + colors[1] + "" + colors[0] + "Press Enter" + colors[2] + "." + colors[1] + "." + colors[0] + ".",
		colors[0] + ".." + colors[1] + "." + colors[0] + "Press Enter" + colors[1] + "." + colors[0] + ".." + colors[1] + ""
	];

	styles[2] = [
		colors[2] + "- " + colors[1] + "Press Enter " + colors[2] + "-",
		colors[2] + "\\ " + colors[1] + "Press Enter " + colors[2] + "/",
		colors[2] + "| " + colors[1] + "Press Enter " + colors[2] + "|",
		colors[2] + "/ " + colors[1] + "Press Enter " + colors[2] + "\\"
	];

	styles[3] = [
		pcbColors['@X08'] + "■■■Press Enter■■■",
		pcbColors['@X08'] + "" + colors[1] + "■" + pcbColors['@X08'] + "■■Press Enter■■" + colors[1] + "■",
		pcbColors['@X08'] + "" + colors[2] + "■" + colors[1] + "■" + pcbColors['@X08'] + "■Press Enter■" + colors[1] + "■" + colors[2] + "■",
		pcbColors['@X08'] + "" + pcbColors['@X0F'] + "■" + colors[2] + "■" + colors[1] + "■" + pcbColors['@X08'] + "Press Enter" + colors[1] + "■" + colors[2] + "■" + pcbColors['@X0F'] + "■",
		colors[2] + "■" + pcbColors['@X0F'] + "■" + colors[2] + "■" + colors[1] + "P" + pcbColors['@X08'] + "ress Ente" + colors[1] + "r" + colors[2] + "■" + "" + pcbColors['@X0F'] + "■" + colors[2] + "■",
		colors[1] + "■" + colors[2] + "■" + pcbColors['@X0F'] + "■" + colors[2] + "P" + colors[1] + "r" + pcbColors['@X08'] + "ess Ent" + pcbColors['@X07'] + "" + colors[1] + "e" + colors[2] + "r" + pcbColors['@X0F'] + "■" + colors[2] + "■" + colors[1] + "■",
		pcbColors['@X08'] + "■" + colors[1] + "■" + colors[2] + "■" + pcbColors['@X0F'] + "P" + colors[2] + "r" + colors[1] + "e" + pcbColors['@X08'] + "ss En" + colors[1] + "t" + colors[2] + "e" + pcbColors['@X0F'] + "r" + colors[2] + "■" + colors[1] + "■" + pcbColors['@X08'] + "■",
		pcbColors['@X08'] + "■■" + colors[1] + "■" + colors[2] + "P" + pcbColors['@X0F'] + "r" + colors[2] + "e" + colors[1] + "s" + pcbColors['@X08'] + "s E" + pcbColors['@X07'] + "" + colors[1] + "n" + colors[2] + "t" + pcbColors['@X0F'] + "e" + colors[2] + "r" + colors[1] + "■" + pcbColors['@X08'] + "■■",
		pcbColors['@X08'] + "■■■" + colors[1] + "P" + colors[2] + "r" + pcbColors['@X0F'] + "e" + colors[2] + "s" + colors[1] + "s" + pcbColors['@X08'] + " " + colors[1] + "E" + colors[2] + "n" + pcbColors['@X0F'] + "t" + colors[2] + "e" + colors[1] + "r" + pcbColors['@X08'] + "■■■",
		pcbColors['@X08'] + "■■■P" + colors[1] + "r" + colors[2] + "e" + pcbColors['@X0F'] + "s" + colors[2] + "s E" + pcbColors['@X0F'] + "n" + colors[2] + "t" + colors[1] + "e" + pcbColors['@X08'] + "r■■■" + pcbColors['@X07'] + "",
		pcbColors['@X08'] + "■■■Pr" + colors[1] + "e" + colors[2] + "s" + pcbColors['@X0F'] + "s E" + colors[2] + "n" + colors[1] + "t" + pcbColors['@X08'] + "er■■■" + pcbColors['@X07'] + "",
		pcbColors['@X08'] + "■■■Pre" + colors[1] + "s" + colors[2] + "s E" + colors[1] + "n" + pcbColors['@X08'] + "ter■■■",
		pcbColors['@X08'] + "■■■Pres" + colors[1] + "s E" + pcbColors['@X08'] + "nter■■■",
		pcbColors['@X08'] + "■■■Pre" + colors[1] + "s" + colors[2] + "s E" + colors[1] + "n" + pcbColors['@X08'] + "ter■■■",
		pcbColors['@X08'] + "■■■Pr" + colors[1] + "e" + colors[2] + "s" + pcbColors['@X0F'] + "s E" + colors[2] + "n" + colors[1] + "t" + pcbColors['@X08'] + "er■■■",
		pcbColors['@X08'] + "■■■P" + colors[1] + "r" + colors[2] + "e" + pcbColors['@X0F'] + "s" + colors[2] + "s E" + pcbColors['@X0F'] + "n" + colors[2] + "t" + colors[1] + "e" + pcbColors['@X08'] + "r■■■" + pcbColors['@X07'] + "",
		pcbColors['@X08'] + "■■■" + colors[1] + "P" + colors[2] + "r" + pcbColors['@X0F'] + "e" + colors[2] + "s" + colors[1] + "s E" + colors[2] + "n" + pcbColors['@X0F'] + "t" + colors[2] + "e" + colors[1] + "r" + pcbColors['@X08'] + "■■■",
		pcbColors['@X08'] + "■■" + colors[1] + "■" + colors[2] + "P" + pcbColors['@X0F'] + "r" + colors[2] + "e" + colors[1] + "s" + pcbColors['@X08'] + "s E" + colors[1] + "n" + colors[2] + "t" + pcbColors['@X0F'] + "e" + colors[2] + "r" + colors[1] + "■" + pcbColors['@X08'] + "■■",
		pcbColors['@X08'] + "■" + colors[1] + "■" + colors[2] + "■" + pcbColors['@X0F'] + "P" + colors[2] + "r" + colors[1] + "e" + pcbColors['@X08'] + "ss En" + colors[1] + "t" + colors[2] + "e" + pcbColors['@X0F'] + "r" + colors[2] + "■" + colors[1] + "■" + pcbColors['@X08'] + "■",
		colors[1] + "■" + colors[2] + "■" + pcbColors['@X0F'] + "■" + colors[2] + "P" + colors[1] + "r" + pcbColors['@X08'] + "ess Ent" + colors[1] + "e" + colors[2] + "r" + pcbColors['@X0F'] + "■" + colors[2] + "■" + colors[1] + "■",
		colors[2] + "■" + pcbColors['@X0F'] + "■" + colors[2] + "■" + colors[1] + "P" + pcbColors['@X08'] + "ress Ente" + colors[1] + "r" + colors[2] + "■" + pcbColors['@X0F'] + "■" + colors[2] + "■",
		pcbColors['@X0F'] + "■" + colors[2] + "■" + colors[1] + "■" + pcbColors['@X08'] + "Press Enter" + colors[1] + "■" + colors[2] + "■" + pcbColors['@X0F'] + "■",
		colors[2] + "■" + colors[1] + "■" + pcbColors['@X08'] + "■Press Enter■" + colors[2] + "■" + colors[1] + "■",
		colors[1] + "■" + pcbColors['@X08'] + "■■Press Enter■■" + colors[1] + "■"
	];

	styles[4] = [
		colors[1] + "-" + colors[2] + "-" + pcbColors['@X0F'] + "- Press Enter -" + colors[2] + "-" + colors[1] + "-" + pcbColors['@X07'] + "",
		colors[1] + "\\" + colors[2] + "\\" + pcbColors['@X0F'] + "\\ Press Enter /" + colors[2] + "/" + colors[1] + "/" + pcbColors['@X07'] + "",
		colors[1] + "|" + colors[2] + "|" + pcbColors['@X0F'] + "| Press Enter " + pcbColors['@X0F'] + "|" + colors[2] + "|" + colors[1] + "|" + pcbColors['@X07'] + "",
		colors[1] + "/" + colors[2] + "/" + pcbColors['@X0F'] + "/ Press Enter \\" + colors[2] + "\\" + colors[1] + "\\" + pcbColors['@X07'] + ""
	];

	styles[5] = [
		"" + colors[2] + ">   " + colors[1] + "Press Enter   " + colors[2] + "<",
		" " + colors[2] + ">  " + colors[1] + "Press Enter  " + colors[2] + "< ",
		"  " + colors[2] + "> " + colors[1] + "Press Enter " + colors[2] + "<  ",
		"   " + colors[2] + ">Press Enter<   "
	];

	styles[6] = [
		colors[2] + "■ " + colors[1] + "H" + pcbColors['@X08'] + "iT EnTeR " + colors[2] + "■",
		colors[2] + "■ " + colors[2] + "H" + colors[1] + "i" + pcbColors['@X08'] + "T EnTeR " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X0F'] + "H" + colors[2] + "i" + colors[1] + "T " + pcbColors['@X08'] + "EnTeR " + colors[2] + "■",
		colors[2] + "■ " + colors[2] + "H" + pcbColors['@X0F'] + "i" + colors[2] + "T " + pcbColors['@X08'] + "EnTeR " + colors[2] + "■",
		colors[2] + "■ " + colors[1] + "H" + colors[2] + "i" + pcbColors['@X0F'] + "T " + colors[1] + "E" + pcbColors['@X08'] + "nTeR " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "H" + colors[1] + "i" + colors[2] + "T " + colors[2] + "E" + colors[1] + "n" + pcbColors['@X08'] + "TeR " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "Hi" + colors[1] + "T " + pcbColors['@X0F'] + "E" + colors[2] + "n" + colors[1] + "T" + pcbColors['@X08'] + "eR " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT " + colors[2] + "E" + pcbColors['@X0F'] + "n" + colors[2] + "T" + colors[1] + "e" + pcbColors['@X08'] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT " + colors[1] + "E" + colors[2] + "n" + pcbColors['@X0F'] + "T" + colors[2] + "e" + colors[1] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT E" + colors[1] + "n" + colors[2] + "T" + pcbColors['@X0F'] + "e" + colors[2] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT En" + colors[1] + "T" + colors[2] + "e" + pcbColors['@X0F'] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT EnT" + colors[1] + "e" + colors[2] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT EnTe" + colors[1] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT EnT" + colors[1] + "e" + colors[2] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT En" + colors[1] + "T" + colors[2] + "e" + pcbColors['@X0F'] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT E" + colors[1] + "n" + colors[2] + "T" + pcbColors['@X0F'] + "e" + colors[2] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT " + colors[1] + "E" + colors[2] + "n" + pcbColors['@X0F'] + "T" + colors[2] + "e" + colors[1] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "HiT " + colors[2] + "E" + pcbColors['@X0F'] + "n" + colors[2] + "T" + colors[1] + "e" + pcbColors['@X08'] + "R " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "Hi" + colors[1] + "T " + pcbColors['@X0F'] + "E" + colors[2] + "n" + colors[1] + "T" + pcbColors['@X08'] + "eR " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X08'] + "H" + colors[1] + "i" + colors[2] + "T " + colors[2] + "E" + colors[1] + "n" + pcbColors['@X08'] + "TeR " + colors[2] + "■",
		colors[2] + "■ " + colors[1] + "H" + colors[2] + "i" + pcbColors['@X0F'] + "T " + colors[1] + "E" + pcbColors['@X08'] + "nTeR " + colors[2] + "■",
		colors[2] + "■ " + colors[2] + "H" + pcbColors['@X0F'] + "i" + colors[2] + "T " + pcbColors['@X08'] + "EnTeR " + colors[2] + "■",
		colors[2] + "■ " + pcbColors['@X0F'] + "H" + colors[2] + "i" + colors[1] + "T " + pcbColors['@X08'] + "EnTeR " + colors[2] + "■",
		colors[2] + "■ " + colors[2] + "H" + colors[1] + "i" + pcbColors['@X08'] + "T EnTeR " + colors[2] + "■"
	];

	styles[7] = [
		"               ",
		"" + colors[0] + "S              ",
		"" + colors[1] + "S" + colors[0] + "N             ",
		"" + colors[2] + "S" + colors[1] + "N" + colors[0] + "a            ",
		"" + colors[1] + "S" + colors[2] + "N" + colors[1] + "a" + colors[0] + "P           ",
		"" + colors[0] + "S" + colors[1] + "N" + colors[2] + "a" + colors[1] + "P           ",
		" " + colors[0] + "N" + colors[1] + "a" + colors[2] + "P " + colors[0] + "K         ",
		"  " + colors[0] + "a" + colors[1] + "P K" + colors[0] + "i        ",
		"   " + colors[0] + "P " + colors[2] + "K" + colors[1] + "i" + colors[0] + "C       ",
		"     " + colors[1] + "K" + colors[2] + "i" + colors[1] + "C" + colors[0] + "k      ",
		"     " + colors[0] + "K" + colors[1] + "i" + colors[2] + "C" + colors[1] + "k      ",
		"      " + colors[0] + "i" + colors[1] + "C" + colors[2] + "k " + colors[0] + "E    ",
		"       " + colors[0] + "C" + colors[1] + "k E" + colors[0] + "n   ",
		"        " + colors[0] + "k " + colors[2] + "E" + colors[1] + "n" + colors[0] + "T  ",
		"          " + colors[0] + "E" + colors[1] + "n" + colors[2] + "T" + colors[1] + "e" + colors[0] + "R",
		"           " + colors[0] + "n" + colors[1] + "T" + colors[2] + "e" + colors[1] + "R",
		"            " + colors[0] + "T" + colors[1] + "e" + colors[2] + "R",
		"             " + colors[0] + "e" + colors[1] + "R",
		"              " + colors[0] + "R"
	];

	styles[8] = [
		"" + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X0F'] + "ENTER  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".",
		"" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS  " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X07'] + "E" + pcbColors['@X0F'] + "NTE" + pcbColors['@X07'] + "" + pcbColors['@X07'] + "R  " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..",
		"" + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X08'] + "E" + pcbColors['@X0F'] + "NTE" + pcbColors['@X08'] + "R  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X02'] + "RESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "P",
		"" + pcbColors['@X02'] + "SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE  " + colors[0] + "<" + colors[1] + "\\" + colors[0] + "> " + pcbColors['@X08'] + "E " + pcbColors['@X0F'] + "NTE " + pcbColors['@X08'] + "R <" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X02'] + "ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR",
		"ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">" + pcbColors['@X08'] + "E  " + pcbColors['@X0F'] + "NTE  " + pcbColors['@X08'] + "R" + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X02'] + "SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE",
		"RESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "P  " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">   " + pcbColors['@X0F'] + "NTE" + pcbColors['@X07'] + "   " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES",
		"PRESS" + pcbColors['@X0A'] + "..  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">   " + pcbColors['@X07'] + "N" + pcbColors['@X0F'] + "T" + pcbColors['@X07'] + "E   " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X02'] + "" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS",
		"" + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".  " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">   " + pcbColors['@X08'] + "N" + pcbColors['@X0F'] + "T" + pcbColors['@X08'] + "E   " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".",
		"" + pcbColors['@X02'] + "" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X08'] + "N " + pcbColors['@X0F'] + "T " + pcbColors['@X08'] + "E  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..",
		"" + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES  " + colors[0] + "<" + colors[1] + "/" + colors[0] + "> " + pcbColors['@X08'] + "N  " + pcbColors['@X0F'] + "T  " + pcbColors['@X08'] + "E " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X02'] + "ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR",
		"" + pcbColors['@X02'] + "SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">" + pcbColors['@X08'] + "N   " + pcbColors['@X0F'] + "T   " + pcbColors['@X08'] + "E" + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X02'] + "SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE",
		"" + pcbColors['@X02'] + "ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR  " + colors[0] + "<" + colors[1] + "\\>    " + pcbColors['@X0F'] + "T    " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES",
		"" + pcbColors['@X02'] + "RESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "P  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">    " + pcbColors['@X07'] + "T    " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS",
		"" + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..  " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">    " + pcbColors['@X08'] + "T    " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".",
		"" + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">         <" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..",
		"" + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..  " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">    " + pcbColors['@X08'] + "T    " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".",
		"" + pcbColors['@X02'] + "RESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "P  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">    " + pcbColors['@X07'] + "T    <" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS",
		"" + pcbColors['@X02'] + "ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR  " + colors[0] + "<" + colors[1] + "/>    " + pcbColors['@X0F'] + "T    " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES",
		"SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">" + pcbColors['@X08'] + "N   " + pcbColors['@X0F'] + "T   " + pcbColors['@X08'] + "E" + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X02'] + "SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE",
		"" + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES  " + colors[0] + "<" + colors[1] + "\\" + colors[0] + "> " + pcbColors['@X08'] + "N  " + pcbColors['@X0F'] + "T  " + pcbColors['@X08'] + "E " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X02'] + "ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR",
		"" + pcbColors['@X02'] + "" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X08'] + "N " + pcbColors['@X0F'] + "T " + pcbColors['@X08'] + "E  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..",
		"" + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".  " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">   " + pcbColors['@X08'] + "N" + pcbColors['@X0F'] + "T" + pcbColors['@X08'] + "E   " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".",
		"" + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">   " + pcbColors['@X07'] + "N" + pcbColors['@X0F'] + "T" + pcbColors['@X07'] + "E   " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X02'] + "" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS ",
		"" + pcbColors['@X02'] + "RESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "P  " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">   " + pcbColors['@X0F'] + "NTE" + pcbColors['@X07'] + "   " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES",
		"" + pcbColors['@X02'] + "ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">" + pcbColors['@X08'] + "E  " + pcbColors['@X0F'] + "NTE  " + pcbColors['@X08'] + "R" + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X02'] + "SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE",
		"" + pcbColors['@X02'] + "SS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRE  " + colors[0] + "<" + colors[1] + "/" + colors[0] + "> " + pcbColors['@X08'] + "E " + pcbColors['@X0F'] + "NTE " + pcbColors['@X08'] + "R <" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X02'] + "ESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PR",
		"" + pcbColors['@X02'] + "S" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRES  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X08'] + "E" + pcbColors['@X0F'] + "NTE" + pcbColors['@X08'] + "R  " + colors[0] + "<" + colors[1] + "-" + colors[0] + ">  " + pcbColors['@X02'] + "RESS" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "P",
		"" + pcbColors['@X0A'] + ".." + pcbColors['@X02'] + "PRESS  " + colors[0] + "<" + colors[1] + "\\" + colors[0] + ">  " + pcbColors['@X07'] + "E" + pcbColors['@X0F'] + "NTE" + pcbColors['@X07'] + "" + pcbColors['@X07'] + "R  " + colors[0] + "<" + colors[1] + "/" + colors[0] + ">  " + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "..",
		"" + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + ".  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X0F'] + "ENTER  " + colors[0] + "<" + colors[1] + "l" + colors[0] + ">  " + pcbColors['@X0A'] + "." + pcbColors['@X02'] + "PRESS" + pcbColors['@X0A'] + "."
	];

	// Static styles

	styles[9] = (fadeWord('--[', color, 'in') + '  ' + fadeSentence(prompt) + '  ' + fadeWord(']--', color, 'out'));
	styles[10] = (chalk.bold.grey('[   ') + highlightSentence(prompt, color) + chalk.bold.grey('   ]'));
	styles[11] = (chalk[color]('( ') + highlightSentence(prompt, color) + chalk[color](' )'));
	styles[12] = (chalk.bold.grey('[ ') + chalk.white(prompt) + chalk.bold.grey(' ]'));
	styles[13] = (fadeWord('[-]', 'blue', 'inverse') + ' ' + highlightSentence(prompt) + ' ' + fadeWord('[-]', 'blue', 'inverse'));

}

function iterateSentence(sentence, func, color, direction) {

	var out = '';
	var words = sentence.split(' ');
	for (var i = 0; i < words.length; i++) {

		var word = words[i];
		out += func(word, color, direction);

		if (i < words.length - 1) {
			out += ' ';
		}

	}

	return out;

}

function fadeSentence(sentence, color, direction) {
	return iterateSentence(sentence, fadeWord, color, direction);
}

function highlightSentence(sentence, color, direction) {
	return iterateSentence(sentence, highlightWord, color, direction);
}

function highlightWord(word, color) {

	color = color || 'red';

	var out = '';

	for (var i = 0; i < word.length; i++) {

		var char = word[i];

		if (i === 0) {
			out += chalk.bold[color](char);
		} else {
			out += chalk[color](char);
		}

	}

	 return out;

}

function fadeWord(word, color, direction) {

	var low, mid, high;

	var length = word.length;

	var out = '';

	color = color || 'white';
	direction = direction || 'in';

	if (direction === 'in') {

		low = chalk.bold.grey;
		mid = chalk[color];
		high = chalk.bold[color];

	} else if (direction === 'inverse') {

		low = chalk.bold[color];
		mid = chalk.bold.grey;
		high = chalk[color];

	} else {

		low = chalk.bold[color];
		mid = chalk[color];
		high = chalk.bold.grey;

	}

	for (var i = length - 1; i >= 0; i--) {

		var char = word[length - 1 - i];

		if (i >= length - 1 && i >= 2) {
			out += low(char);
		} else if (i >= 1) {
			out += mid(char);
		} else {
			out += high(char);
		}

	}

	return out;

}

module.exports = function (options, callback) {

	var interval,
		colors,
		color;

	if (typeof options === 'function') {
		callback = options;
		options = {};
	}

	_.defaults(options, {
		style: 3,
		color: 'blue',
		centered: true,
		input: process.stdin,
		output: process.stdout
	});

	switch (options.color) {

		case 'red':
		case 'yellow':
		case 'green':
		case 'blue':
		case 'cyan':
		case 'magenta':
			colors = [
				chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.grey.open,
				chalk.styles.reset.open + chalk.styles[options.color].open,
				chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles[options.color].open
			];
			color = options.color;
			break;

		case 'grey':
			colors = [
				chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.grey.open,
				chalk.styles.reset.open + chalk.styles.white.open,
				chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.white.open
			];
			color = options.color;
			break;

		default:
			colors = [
				chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.grey.open,
				chalk.styles.reset.open + chalk.styles.blue.open,
				chalk.styles.reset.open + chalk.styles.bold.open + chalk.styles.blue.open
			];
			color = 'blue';
			break;

	}

	setStyles(colors, color);

	var stream = options.output;

	var CR = stream.isTTY ? '\u001b[0G' : '\u000d';
	var CLEAR = stream.isTTY ? '\u001b[2K' : '\u000d \u000d';

	var strings = styles[options.style];

	var frame = 0;

	var displayFrame = function () {

		var string = strings[frame];

		if (options.centered && stream.columns) {
			stream.write(new Array(Math.floor((stream.columns - lengths[options.style]) / 2) + 1).join(' '));
		}

		stream.write(string);
		stream.write(chalk.styles.reset.open);
		stream.write(CR);

	};

	// Clear cursor
	stream.write("\x1B[?25l");

	var rl = readline2.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.output.mute();
	rl.input.on('keypress', function (s, key) {

		if (key && key.name) {

			if (key.name === 'return') {

				// Restore cursor
				stream.write("\x1B[?25h");

				stream.write(CLEAR);
				stream.write(CR);

				if (interval) {
					clearInterval(interval);
				}

				return callback();

			}

		}

	});

	rl.on('SIGINT', function () {

		// Restore cursor
		stream.write("\x1B[?25h");

		stream.write(CLEAR);
		stream.write(CR);

		if (interval) {
			clearInterval(interval);
		}

		process.exit(128 + 2);
		return;

	});

	if (_.isString(strings)) {

		if (options.centered && stream.columns) {
			stream.write(new Array(Math.floor((stream.columns - lengths[options.style]) / 2) + 1).join(' '));
		}
		stream.write(strings);

	} else {

		interval = setInterval(function () {

			displayFrame();
			frame++;

			if (frame >= strings.length) {
				frame = 0;
			}

		}, 100);

	}

}