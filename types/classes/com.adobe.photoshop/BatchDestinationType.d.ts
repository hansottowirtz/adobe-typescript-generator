/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class BatchDestinationType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.BatchDestinationType}
			 * @readonly
			 */
			public static readonly FOLDER: Adobe.Photoshop.BatchDestinationType;
			/**
			 * @type {Adobe.Photoshop.BatchDestinationType}
			 * @readonly
			 */
			public static readonly NODESTINATION: Adobe.Photoshop.BatchDestinationType;
			/**
			 * @type {Adobe.Photoshop.BatchDestinationType}
			 * @readonly
			 */
			public static readonly SAVEANDCLOSE: Adobe.Photoshop.BatchDestinationType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}