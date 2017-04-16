/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ChannelType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ChannelType}
			 * @readonly
			 */
			public static readonly COMPONENT: Adobe.Photoshop.ChannelType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ChannelType}
			 * @readonly
			 */
			public static readonly MASKEDAREA: Adobe.Photoshop.ChannelType;
			/**
			 * @type {Adobe.Photoshop.ChannelType}
			 * @readonly
			 */
			public static readonly SELECTEDAREA: Adobe.Photoshop.ChannelType;
			/**
			 * @type {Adobe.Photoshop.ChannelType}
			 * @readonly
			 */
			public static readonly SPOTCOLOR: Adobe.Photoshop.ChannelType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}