/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An installed font */
		class TextFont extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** the font's family */
			public readonly family: string;
			/** The font's text face name */
			public readonly name: string;
			/** the font's PostScript name */
			public readonly postScriptName: string;
			/** the font's style name */
			public readonly style: string;
		}
	}
}