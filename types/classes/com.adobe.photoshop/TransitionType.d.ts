/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** PDF presentation transition types. */
		class TransitionType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * Images transition in horizontal stripes like Venetian 
			 * blinds.
			 */
			public static readonly BLINDSHORIZONTAL: Adobe.Photoshop.TransitionType;
			/** Images transition in vertical stripes. */
			public static readonly BLINDSVERTICAL: Adobe.Photoshop.TransitionType;
			/** Images transition using a shrinking box shape. */
			public static readonly BOXIN: Adobe.Photoshop.TransitionType;
			/** Images transition using an expanding box shape. */
			public static readonly BOXOUT: Adobe.Photoshop.TransitionType;
			/** One image dissolves into the next. */
			public static readonly DISSOLVE: Adobe.Photoshop.TransitionType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Images dissolve top to bottom. */
			public static readonly GLITTERDOWN: Adobe.Photoshop.TransitionType;
			/** Images dissolve left to right. */
			public static readonly GLITTERRIGHT: Adobe.Photoshop.TransitionType;
			/** Images dissolve top-left to bottom-right. */
			public static readonly GLITTERRIGHTDOWN: Adobe.Photoshop.TransitionType;
			/** Images change with no visible transition. */
			public static readonly NONE: Adobe.Photoshop.TransitionType;
			/** Images transition using random effects. */
			public static readonly RANDOM: Adobe.Photoshop.TransitionType;
			/**
			 * The new images roll in from the top and bottom of the 
			 * screen.
			 */
			public static readonly SPLITHORIZONTALIN: Adobe.Photoshop.TransitionType;
			/**
			 * The new image spreads from the middle of the screen to the 
			 * top and bottom of the screen.
			 */
			public static readonly SPLITHORIZONTALOUT: Adobe.Photoshop.TransitionType;
			/**
			 * The new image rolls in from the left and right edges of the 
			 * screen.
			 */
			public static readonly SPLITVERTICALIN: Adobe.Photoshop.TransitionType;
			/**
			 * The new image rolls out from the middle of the screen to the 
			 * left and right edges of the screen.
			 */
			public static readonly SPLITVERTICALOUT: Adobe.Photoshop.TransitionType;
			/** The new image rolls in from the top of the screen. */
			public static readonly WIPEDOWN: Adobe.Photoshop.TransitionType;
			/** The new image rolls in from the right side of the screen. */
			public static readonly WIPELEFT: Adobe.Photoshop.TransitionType;
			/** The new image rolls in from the left side of the screen. */
			public static readonly WIPERIGHT: Adobe.Photoshop.TransitionType;
			/** The new image rolls in from the bottom of the screen. */
			public static readonly WIPEUP: Adobe.Photoshop.TransitionType;
			/** Constructor */
			public constructor();
		}
	}
}