/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DocPositionStyle extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.DocPositionStyle}
			 * @readonly
			 */
			public static readonly PRINTCENTERED: Adobe.Photoshop.DocPositionStyle;
			/**
			 * @type {Adobe.Photoshop.DocPositionStyle}
			 * @readonly
			 */
			public static readonly SIZETOFIT: Adobe.Photoshop.DocPositionStyle;
			/**
			 * @type {Adobe.Photoshop.DocPositionStyle}
			 * @readonly
			 */
			public static readonly USERDEFINED: Adobe.Photoshop.DocPositionStyle;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}