/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ResetTarget extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ResetTarget}
			 * @readonly
			 */
			public static readonly ALLTOOLS: Adobe.Photoshop.ResetTarget;
			/**
			 * @type {Adobe.Photoshop.ResetTarget}
			 * @readonly
			 */
			public static readonly ALLWARNINGS: Adobe.Photoshop.ResetTarget;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ResetTarget}
			 * @readonly
			 */
			public static readonly EVERYTHING: Adobe.Photoshop.ResetTarget;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}