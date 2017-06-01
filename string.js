var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	dinosaur = 'triceratops',
	dinosaurUpperCase = dinosaur.toUpperCase(),
	textReplace = text.replace('Velociraptor', dinosaurUpperCase),
	text2 = textReplace.substr(0, textReplace.length/2);
console.log(text2);