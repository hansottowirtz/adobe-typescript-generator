/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** An installed font */
		class TextFont extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the font's family
			 * @type {string}
			 * @readonly
			 */
			public readonly family: string;
			/**
			 * The font's text face name
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * the font's PostScript name
			 * @type {string}
			 * @readonly
			 */
			public readonly postScriptName: string;
			/**
			 * the font's style name
			 * @type {string}
			 * @readonly
			 */
			public readonly style: string;
		}
	}
}