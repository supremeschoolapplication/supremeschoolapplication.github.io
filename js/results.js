function result() {

	var students= {
	DAVID : {
	math: "95",
	physics : "80",
	literature : "75"
	},
	AZEEZ : {
	math: "95",
	physics : "80",
	literatute : "75"
	},
	ALABI : {
	math: "95",
	physics : "80",
	literatute : "75"
	}

	}
	var studentname=document.getElementById("studentname").value;
	var input=studentname.toUpperCase();
	var definition=students[input];
	var output=document.getElementById("output");
	if (definition==undefined) {
	output.innerHTML=`<hr> There is no information about this student. <hr>`;
	} else {
	output.innerHTML=`<hr> Math score is ${definition.math}. <hr> Physics score is ${definition.physics}. <hr> Literature score is ${definition.literature}. <hr>`;
	};
	};
	