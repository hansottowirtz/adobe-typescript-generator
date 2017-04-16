/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.TextType}
			 * @readonly
			 */
			public static readonly PARAGRAPHTEXT: Adobe.Photoshop.TextType;
			/**
			 * @type {Adobe.Photoshop.TextType}
			 * @readonly
			 */
			public static readonly POINTTEXT: Adobe.Photoshop.TextType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}