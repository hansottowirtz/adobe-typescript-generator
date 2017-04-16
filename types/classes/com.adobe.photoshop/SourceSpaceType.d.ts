/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SourceSpaceType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.SourceSpaceType}
			 * @readonly
			 */
			public static readonly DOCUMENT: Adobe.Photoshop.SourceSpaceType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SourceSpaceType}
			 * @readonly
			 */
			public static readonly PROOF: Adobe.Photoshop.SourceSpaceType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}