/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A layer composition in a document */
		class LayerComp extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** use layer appearance */
			public appearance: boolean;
			/** the description of the layer comp */
			public comment: any;
			/** the name of the layer comp */
			public name: string;
			/** use layer position */
			public position: boolean;
			/** the layer comp is currently selected */
			public readonly selected: boolean;
			/** use layer visibility */
			public visibility: boolean;
			/** apply the layer comp to the document */
			public apply(): void;
			/** recapture the current layer state(s) for this layer comp */
			public recapture(): void;
			/** delete the object */
			public remove(): void;
			/** reset the layer comp state to the document state */
			public resetFromComp(): void;
		}
	}
}