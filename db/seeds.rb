10.times do |i|
    Task.create(
      todo: "Task#{i + 1}",
    )
end
