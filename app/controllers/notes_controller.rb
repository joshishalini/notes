class NotesController < ApplicationController
  def index
  end

  def create
		@note = Note.new(note_params)
		if @note.save
			render json:{success: true, note: @note }
		else
			render json:{success: false, message: @note.errors.full_messages.join(', ') }
		end
  end

  def get_all_notes
  	render json:{success: true, notes:Note.all}
  end

	private
		def note_params
      params.require(:note).permit(:id, :description)
		end
end
