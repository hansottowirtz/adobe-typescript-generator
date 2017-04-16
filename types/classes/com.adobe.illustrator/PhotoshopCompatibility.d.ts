/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PhotoshopCompatibility extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.PhotoshopCompatibility}
			 * @readonly
			 */
			public static readonly PHOTOSHOP6: Adobe.Illustrator.PhotoshopCompatibility;
			/**
			 * @type {Adobe.Illustrator.PhotoshopCompatibility}
			 * @readonly
			 */
			public static readonly PHOTOSHOP8: Adobe.Illustrator.PhotoshopCompatibility;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}