/// <reference path="../../packages/com.adobe.cshostadapter/references.d.ts"/>

declare namespace Adobe {
	namespace Cshostadapter {
		/**
		 * Represents an event which occurred in Photoshop. Provides a 
		 * set of event  types which may be listened for via 
		 * PSEventAdapter.addEventListener(...).
		 */
		class PSEvent extends Adobe.Flash.Events.Event {
			/**
			 * Constructs a new PSEvent with the specified type. The type 
			 * should be a String representation of the event's Photoshop 
			 * runtime ID.
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @type {void}
			 */
			public static readonly _3DTRANSFORM: any;
			/**
			 * @type {void}
			 */
			public static readonly ACCENTED_EDGES: any;
			/**
			 * @type {void}
			 */
			public static readonly ADD: any;
			/**
			 * @type {void}
			 */
			public static readonly ADD_NOISE: any;
			/**
			 * @type {void}
			 */
			public static readonly ADD_TO: any;
			/**
			 * @type {void}
			 */
			public static readonly ALIGN: any;
			/**
			 * @type {void}
			 */
			public static readonly ALL: any;
			/**
			 * @type {void}
			 */
			public static readonly ANGLED_STROKES: any;
			/**
			 * @type {void}
			 */
			public static readonly APPLY_IMAGE: any;
			/**
			 * @type {void}
			 */
			public static readonly APPLY_STYLE: any;
			/**
			 * @type {void}
			 */
			public static readonly ASSERT: any;
			/**
			 * @type {void}
			 */
			public static readonly AVERAGE: any;
			/**
			 * @type {void}
			 */
			public static readonly BACK_LIGHT: any;
			/**
			 * @type {void}
			 */
			public static readonly BAS_RELIEF: any;
			/**
			 * @type {void}
			 */
			public static readonly BATCH: any;
			/**
			 * @type {void}
			 */
			public static readonly BATCH_FROM_DROPLET: any;
			/**
			 * @type {void}
			 */
			public static readonly BLUR: any;
			/**
			 * @type {void}
			 */
			public static readonly BLUR_MORE: any;
			/**
			 * @type {void}
			 */
			public static readonly BORDER: any;
			/**
			 * @type {void}
			 */
			public static readonly BRIGHTNESS: any;
			/**
			 * @type {void}
			 */
			public static readonly CANVAS_SIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly CHALK_CHARCOAL: any;
			/**
			 * @type {void}
			 */
			public static readonly CHANNEL_MIXER: any;
			/**
			 * @type {void}
			 */
			public static readonly CHARCOAL: any;
			/**
			 * @type {void}
			 */
			public static readonly CHROME: any;
			/**
			 * @type {void}
			 */
			public static readonly CLEAR: any;
			/**
			 * @type {void}
			 */
			public static readonly CLOSE: any;
			/**
			 * @type {void}
			 */
			public static readonly CLOUDS: any;
			/**
			 * @type {void}
			 */
			public static readonly COLOR_BALANCE: any;
			/**
			 * @type {void}
			 */
			public static readonly COLOR_CAST: any;
			/**
			 * @type {void}
			 */
			public static readonly COLOR_HALFTONE: any;
			/**
			 * @type {void}
			 */
			public static readonly COLOR_RANGE: any;
			/**
			 * @type {void}
			 */
			public static readonly COLORED_PENCIL: any;
			/**
			 * @type {void}
			 */
			public static readonly CONTE_CRAYON: any;
			/**
			 * @type {void}
			 */
			public static readonly CONTRACT: any;
			/**
			 * @type {void}
			 */
			public static readonly CONVERT_MODE: any;
			/**
			 * @type {void}
			 */
			public static readonly COPY: any;
			/**
			 * @type {void}
			 */
			public static readonly COPY_EFFECTS: any;
			/**
			 * @type {void}
			 */
			public static readonly COPY_MERGED: any;
			/**
			 * @type {void}
			 */
			public static readonly COPY_TO_LAYER: any;
			/**
			 * @type {void}
			 */
			public static readonly CRAQUELURE: any;
			/**
			 * @type {void}
			 */
			public static readonly CREATE_DROPLET: any;
			/**
			 * @type {void}
			 */
			public static readonly CROP: any;
			/**
			 * @type {void}
			 */
			public static readonly CROSSHATCH: any;
			/**
			 * @type {void}
			 */
			public static readonly CRYSTALLIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly CURVES: any;
			/**
			 * @type {void}
			 */
			public static readonly CUSTOM: any;
			/**
			 * @type {void}
			 */
			public static readonly CUT: any;
			/**
			 * @type {void}
			 */
			public static readonly CUT_TO_LAYER: any;
			/**
			 * @type {void}
			 */
			public static readonly CUTOUT: any;
			/**
			 * @type {void}
			 */
			public static readonly DARK_STROKES: any;
			/**
			 * @type {void}
			 */
			public static readonly DE_INTERLACE: any;
			/**
			 * @type {void}
			 */
			public static readonly DEFINE_PATTERN: any;
			/**
			 * @type {void}
			 */
			public static readonly DEFRINGE: any;
			/**
			 * @type {void}
			 */
			public static readonly DELETE: any;
			/**
			 * @type {void}
			 */
			public static readonly DESATURATE: any;
			/**
			 * @type {void}
			 */
			public static readonly DESELECT: any;
			/**
			 * @type {void}
			 */
			public static readonly DESPECKLE: any;
			/**
			 * @type {void}
			 */
			public static readonly DIFFERENCE_CLOUDS: any;
			/**
			 * @type {void}
			 */
			public static readonly DIFFUSE: any;
			/**
			 * @type {void}
			 */
			public static readonly DIFFUSE_GLOW: any;
			/**
			 * @type {void}
			 */
			public static readonly DISABLE_LAYER_FX: any;
			/**
			 * @type {void}
			 */
			public static readonly DISPLACE: any;
			/**
			 * @type {void}
			 */
			public static readonly DISTRIBUTE: any;
			/**
			 * @type {void}
			 */
			public static readonly DRAW: any;
			/**
			 * @type {void}
			 */
			public static readonly DRY_BRUSH: any;
			/**
			 * @type {void}
			 */
			public static readonly DUPLICATE: any;
			/**
			 * @type {void}
			 */
			public static readonly DUST_AND_SCRATCHES: any;
			/**
			 * @type {void}
			 */
			public static readonly EMBOSS: any;
			/**
			 * @type {void}
			 */
			public static readonly EQUALIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly EXCHANGE: any;
			/**
			 * @type {void}
			 */
			public static readonly EXPAND: any;
			/**
			 * @type {void}
			 */
			public static readonly EXPORT: any;
			/**
			 * @type {void}
			 */
			public static readonly EXTRUDE: any;
			/**
			 * @type {void}
			 */
			public static readonly FACET: any;
			/**
			 * @type {void}
			 */
			public static readonly FADE: any;
			/**
			 * @type {void}
			 */
			public static readonly FEATHER: any;
			/**
			 * @type {void}
			 */
			public static readonly FIBERS: any;
			/**
			 * @type {void}
			 */
			public static readonly FILL: any;
			/**
			 * @type {void}
			 */
			public static readonly FILL_FLASH: any;
			/**
			 * @type {void}
			 */
			public static readonly FILM_GRAIN: any;
			/**
			 * @type {void}
			 */
			public static readonly FILTER: any;
			/**
			 * @type {void}
			 */
			public static readonly FIND_EDGES: any;
			/**
			 * @type {void}
			 */
			public static readonly FLATTEN_IMAGE: any;
			/**
			 * @type {void}
			 */
			public static readonly FLIP: any;
			/**
			 * @type {void}
			 */
			public static readonly FRAGMENT: any;
			/**
			 * @type {void}
			 */
			public static readonly FRESCO: any;
			/**
			 * @type {void}
			 */
			public static readonly GAUSSIAN_BLUR: any;
			/**
			 * @type {void}
			 */
			public static readonly GET: any;
			/**
			 * @type {void}
			 */
			public static readonly GLASS: any;
			/**
			 * @type {void}
			 */
			public static readonly GLOWING_EDGES: any;
			/**
			 * @type {void}
			 */
			public static readonly GRADIENT: any;
			/**
			 * @type {void}
			 */
			public static readonly GRADIENT_MAP: any;
			/**
			 * @type {void}
			 */
			public static readonly GRAIN: any;
			/**
			 * @type {void}
			 */
			public static readonly GRAPHIC_PEN: any;
			/**
			 * @type {void}
			 */
			public static readonly GROUP: any;
			/**
			 * @type {void}
			 */
			public static readonly GROW: any;
			/**
			 * @type {void}
			 */
			public static readonly HALFTONE_SCREEN: any;
			/**
			 * @type {void}
			 */
			public static readonly HIDE: any;
			/**
			 * @type {void}
			 */
			public static readonly HIGH_PASS: any;
			/**
			 * @type {void}
			 */
			public static readonly HSBHSL: any;
			/**
			 * @type {void}
			 */
			public static readonly HUE_SATURATION: any;
			/**
			 * @type {void}
			 */
			public static readonly IMAGE_SIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly IMPORT: any;
			/**
			 * @type {void}
			 */
			public static readonly INK_OUTLINES: any;
			/**
			 * @type {void}
			 */
			public static readonly INTERSECT: any;
			/**
			 * @type {void}
			 */
			public static readonly INTERSECT_WITH: any;
			/**
			 * @type {void}
			 */
			public static readonly INVERSE: any;
			/**
			 * @type {void}
			 */
			public static readonly INVERT: any;
			/**
			 * @type {void}
			 */
			public static readonly LENS_FLARE: any;
			/**
			 * @type {void}
			 */
			public static readonly LEVELS: any;
			/**
			 * @type {void}
			 */
			public static readonly LIGHTING_EFFECTS: any;
			/**
			 * @type {void}
			 */
			public static readonly LINK: any;
			/**
			 * @type {void}
			 */
			public static readonly MAKE: any;
			/**
			 * @type {void}
			 */
			public static readonly MAXIMUM: any;
			/**
			 * @type {void}
			 */
			public static readonly MEDIAN: any;
			/**
			 * @type {void}
			 */
			public static readonly MERGE_LAYERS: any;
			/**
			 * @type {void}
			 */
			public static readonly MERGE_LAYERS_OLD: any;
			/**
			 * @type {void}
			 */
			public static readonly MERGE_SPOT_CHANNEL: any;
			/**
			 * @type {void}
			 */
			public static readonly MERGE_VISIBLE: any;
			/**
			 * @type {void}
			 */
			public static readonly MEZZOTINT: any;
			/**
			 * @type {void}
			 */
			public static readonly MINIMUM: any;
			/**
			 * @type {void}
			 */
			public static readonly MOSAIC: any;
			/**
			 * @type {void}
			 */
			public static readonly MOSAIC_PLUGIN: any;
			/**
			 * @type {void}
			 */
			public static readonly MOTION_BLUR: any;
			/**
			 * @type {void}
			 */
			public static readonly MOVE: any;
			/**
			 * @type {void}
			 */
			public static readonly NEON_GLOW: any;
			/**
			 * @type {void}
			 */
			public static readonly NEXT: any;
			/**
			 * @type {void}
			 */
			public static readonly NOTE_PAPER: any;
			/**
			 * @type {void}
			 */
			public static readonly NOTIFY: any;
			/**
			 * @type {void}
			 */
			public static readonly NTSCCOLORS: any;
			/**
			 * @type {void}
			 */
			public static readonly OCEAN_RIPPLE: any;
			/**
			 * @type {void}
			 */
			public static readonly OFFSET: any;
			/**
			 * @type {void}
			 */
			public static readonly OPEN: any;
			/**
			 * @type {void}
			 */
			public static readonly OPEN_UNTITLED: any;
			/**
			 * @type {void}
			 */
			public static readonly PAINT: any;
			/**
			 * @type {void}
			 */
			public static readonly PAINT_DAUBS: any;
			/**
			 * @type {void}
			 */
			public static readonly PALETTE_KNIFE: any;
			/**
			 * @type {void}
			 */
			public static readonly PASTE: any;
			/**
			 * @type {void}
			 */
			public static readonly PASTE_EFFECTS: any;
			/**
			 * @type {void}
			 */
			public static readonly PASTE_INTO: any;
			/**
			 * @type {void}
			 */
			public static readonly PASTE_OUTSIDE: any;
			/**
			 * @type {void}
			 */
			public static readonly PATCHWORK: any;
			/**
			 * @type {void}
			 */
			public static readonly PHOTOCOPY: any;
			/**
			 * @type {void}
			 */
			public static readonly PINCH: any;
			/**
			 * @type {void}
			 */
			public static readonly PLACE: any;
			/**
			 * @type {void}
			 */
			public static readonly PLASTER: any;
			/**
			 * @type {void}
			 */
			public static readonly PLASTIC_WRAP: any;
			/**
			 * @type {void}
			 */
			public static readonly PLAY: any;
			/**
			 * @type {void}
			 */
			public static readonly POINTILLIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly POLAR: any;
			/**
			 * @type {void}
			 */
			public static readonly POSTER_EDGES: any;
			/**
			 * @type {void}
			 */
			public static readonly POSTERIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly PREVIOUS: any;
			/**
			 * @type {void}
			 */
			public static readonly PRINT: any;
			/**
			 * @type {void}
			 */
			public static readonly PROFILE_TO_PROFILE: any;
			/**
			 * @type {void}
			 */
			public static readonly PURGE: any;
			/**
			 * @type {void}
			 */
			public static readonly QUIT: any;
			/**
			 * @type {void}
			 */
			public static readonly RADIAL_BLUR: any;
			/**
			 * @type {void}
			 */
			public static readonly RASTERIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly RASTERIZE_TYPE_SHEET: any;
			/**
			 * @type {void}
			 */
			public static readonly REMOVE_BLACK_MATTE: any;
			/**
			 * @type {void}
			 */
			public static readonly REMOVE_LAYER_MASK: any;
			/**
			 * @type {void}
			 */
			public static readonly REMOVE_WHITE_MATTE: any;
			/**
			 * @type {void}
			 */
			public static readonly RENAME: any;
			/**
			 * @type {void}
			 */
			public static readonly REPLACE_COLOR: any;
			/**
			 * @type {void}
			 */
			public static readonly RESET: any;
			/**
			 * @type {void}
			 */
			public static readonly RETICULATION: any;
			/**
			 * @type {void}
			 */
			public static readonly REVERT: any;
			/**
			 * @type {void}
			 */
			public static readonly RIPPLE: any;
			/**
			 * @type {void}
			 */
			public static readonly ROTATE: any;
			/**
			 * @type {void}
			 */
			public static readonly ROUGH_PASTELS: any;
			/**
			 * @type {void}
			 */
			public static readonly SAVE: any;
			/**
			 * @type {void}
			 */
			public static readonly SELECT: any;
			/**
			 * @type {void}
			 */
			public static readonly SELECTIVE_COLOR: any;
			/**
			 * @type {void}
			 */
			public static readonly SET: any;
			/**
			 * @type {void}
			 */
			public static readonly SHARPEN: any;
			/**
			 * @type {void}
			 */
			public static readonly SHARPEN_EDGES: any;
			/**
			 * @type {void}
			 */
			public static readonly SHARPEN_MORE: any;
			/**
			 * @type {void}
			 */
			public static readonly SHEAR: any;
			/**
			 * @type {void}
			 */
			public static readonly SHOW: any;
			/**
			 * @type {void}
			 */
			public static readonly SIMILAR: any;
			/**
			 * @type {void}
			 */
			public static readonly SMART_BLUR: any;
			/**
			 * @type {void}
			 */
			public static readonly SMOOTH: any;
			/**
			 * @type {void}
			 */
			public static readonly SMUDGE_STICK: any;
			/**
			 * @type {void}
			 */
			public static readonly SOLARIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly SPATTER: any;
			/**
			 * @type {void}
			 */
			public static readonly SPHERIZE: any;
			/**
			 * @type {void}
			 */
			public static readonly SPLIT_CHANNELS: any;
			/**
			 * @type {void}
			 */
			public static readonly SPONGE: any;
			/**
			 * @type {void}
			 */
			public static readonly SPRAYED_STROKES: any;
			/**
			 * @type {void}
			 */
			public static readonly STAINED_GLASS: any;
			/**
			 * @type {void}
			 */
			public static readonly STAMP: any;
			/**
			 * @type {void}
			 */
			public static readonly STOP: any;
			/**
			 * @type {void}
			 */
			public static readonly STROKE: any;
			/**
			 * @type {void}
			 */
			public static readonly SUBTRACT: any;
			/**
			 * @type {void}
			 */
			public static readonly SUBTRACT_FROM: any;
			/**
			 * @type {void}
			 */
			public static readonly SUMIE: any;
			/**
			 * @type {void}
			 */
			public static readonly TAKE_MERGED_SNAPSHOT: any;
			/**
			 * @type {void}
			 */
			public static readonly TAKE_SNAPSHOT: any;
			/**
			 * @type {void}
			 */
			public static readonly TEXTURE_FILL: any;
			/**
			 * @type {void}
			 */
			public static readonly TEXTURIZER: any;
			/**
			 * @type {void}
			 */
			public static readonly THRESHOLD: any;
			/**
			 * @type {void}
			 */
			public static readonly TILES: any;
			/**
			 * @type {void}
			 */
			public static readonly TORN_EDGES: any;
			/**
			 * @type {void}
			 */
			public static readonly TRACE_CONTOUR: any;
			/**
			 * @type {void}
			 */
			public static readonly TRANSFORM: any;
			/**
			 * @type {void}
			 */
			public static readonly TRAP: any;
			/**
			 * @type {void}
			 */
			public static readonly TWIRL: any;
			/**
			 * @type {void}
			 */
			public static readonly UNDERPAINTING: any;
			/**
			 * @type {void}
			 */
			public static readonly UNDO: any;
			/**
			 * @type {void}
			 */
			public static readonly UNGROUP: any;
			/**
			 * @type {void}
			 */
			public static readonly UNLINK: any;
			/**
			 * @type {void}
			 */
			public static readonly UNSHARP_MASK: any;
			/**
			 * @type {void}
			 */
			public static readonly VARIATIONS: any;
			/**
			 * @type {void}
			 */
			public static readonly WAIT: any;
			/**
			 * @type {void}
			 */
			public static readonly WATER_PAPER: any;
			/**
			 * @type {void}
			 */
			public static readonly WATERCOLOR: any;
			/**
			 * @type {void}
			 */
			public static readonly WAVE: any;
			/**
			 * @type {void}
			 */
			public static readonly WIND: any;
			/**
			 * @type {void}
			 */
			public static readonly ZIG_ZAG: any;
		}
	}
}