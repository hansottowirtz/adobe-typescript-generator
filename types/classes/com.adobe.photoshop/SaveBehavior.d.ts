/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveBehavior extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.SaveBehavior}
			 * @readonly
			 */
			public static readonly ALWAYSSAVE: Adobe.Photoshop.SaveBehavior;
			/**
			 * @type {Adobe.Photoshop.SaveBehavior}
			 * @readonly
			 */
			public static readonly ASKWHENSAVING: Adobe.Photoshop.SaveBehavior;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SaveBehavior}
			 * @readonly
			 */
			public static readonly NEVERSAVE: Adobe.Photoshop.SaveBehavior;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}