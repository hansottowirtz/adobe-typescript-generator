/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PurgeTarget extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.PurgeTarget}
			 * @readonly
			 */
			public static readonly ALLCACHES: Adobe.Photoshop.PurgeTarget;
			/**
			 * @type {Adobe.Photoshop.PurgeTarget}
			 * @readonly
			 */
			public static readonly CLIPBOARDCACHE: Adobe.Photoshop.PurgeTarget;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PurgeTarget}
			 * @readonly
			 */
			public static readonly HISTORYCACHES: Adobe.Photoshop.PurgeTarget;
			/**
			 * @type {Adobe.Photoshop.PurgeTarget}
			 * @readonly
			 */
			public static readonly UNDOCACHES: Adobe.Photoshop.PurgeTarget;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}