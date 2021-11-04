class Task < ApplicationRecord
    validates :todo, presence: true
end
