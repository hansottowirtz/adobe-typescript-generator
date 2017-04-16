/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ByteOrder extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ByteOrder}
			 * @readonly
			 */
			public static readonly IBM: Adobe.Photoshop.ByteOrder;
			/**
			 * @type {Adobe.Photoshop.ByteOrder}
			 * @readonly
			 */
			public static readonly MACOS: Adobe.Photoshop.ByteOrder;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}