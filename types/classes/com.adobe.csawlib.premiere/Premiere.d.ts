/// <reference path="../../packages/com.adobe.csawlib.premiere/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPremiere {
		class Premiere {
			public static readonly app: Adobe.Premiere.App;
			public static readonly doc: Adobe.Premiere.Document;
			public static readonly rootHostObject: HostObject;
		}
	}
}