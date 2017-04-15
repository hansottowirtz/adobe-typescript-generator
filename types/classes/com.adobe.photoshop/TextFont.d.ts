/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An installed font. */
		class TextFont extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The font family. */
			public readonly family: string;
			/** The font name. */
			public readonly name: string;
			/** The PostScript name of the font. */
			public readonly postScriptName: string;
			/** The font style. */
			public readonly style: string;
		}
	}
}