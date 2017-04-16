/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Navbar extends Adobe.Csawlib.CSHostObject {
			public file: string;
			public height: number;
			public id: string;
			public jsFuncs: string;
			public type: string;
			public visible: boolean;
			public execJS(): void;
			public print(): void;
		}
	}
}